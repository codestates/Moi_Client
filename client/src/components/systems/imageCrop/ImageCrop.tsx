/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-const */
//file upload with cropping
// jason

import * as React from 'react';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import './ReactCrop.css';
import styles from '../../../styles/systems/imageCrop/ImageCrop.module.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { FcConferenceCall } from 'react-icons/fc';

interface IFileSelectorCrop {
  onGetBlobFile: (blobFile: File) => void;
  placeholderImage?: string; // optional placeholder image
  aspect?: number; // optional aspect ratio requirement
  style?: React.CSSProperties; // optional style to apply to placeholder image and uploaded image
  onUploadModal: () => void;
}

interface IFileSelectorCropState {
  dataUrl: any;
  crop: any;
  fileName: string;
  upload: boolean;
  imgLoaded: boolean;
  file: any;
}

export class ReactImageCropperTs extends React.Component<
  IFileSelectorCrop,
  IFileSelectorCropState
> {
  constructor(props: IFileSelectorCrop) {
    super(props);
    this.state = {
      dataUrl: null,
      crop: { aspect: 4 / 5 },
      fileName: '',
      upload: false,
      imgLoaded: false,
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onCropChange = this.onCropChange.bind(this);
    this.dataURLtoBlobFile = this.dataURLtoBlobFile.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  onImageLoaded = (image: any) => {
    this.props.aspect // set initial crop values based on whether
      ? this.setState({
          crop: makeAspectCrop(
            {
              x: 25,
              y: 25,
              width: 50,
              height: 65,
              aspect: 4 / 5,
            },
            image.width / image.height,
            10,
          ),
        })
      : this.setState({
          crop: {
            x: 25,
            y: 25,
            width: 50,
            height: 65,
            aspect: 4 / 5,
          },
        });
  };

  handleChange(selectorFiles: FileList) {
    const fileReader = new FileReader();
    let data;

    fileReader.onload = () => {
      data = fileReader.result; // data <-- in this var you have the file data in Base64 format

      //get file name and set dataURL for redering
      this.setState({
        fileName: selectorFiles[0].name,
        dataUrl: data,
        imgLoaded: true,
      });

      //convert dataURL and send blob data to container level
    };
    fileReader.readAsDataURL(selectorFiles[0]);
  }

  //**dataURL to blob** conversion
  dataURLtoBlobFile(dataurl: any) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr], { type: mime });

    return new File([blob], this.state.fileName);
  }

  onCropChange = (crop: any) => {
    this.setState({ crop });
  };

  //runs every time user drags in crop box
  onComplete = (crop: any, pixelCrop: any) => {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx: any = canvas.getContext('2d');

    const blob = this.dataURLtoBlobFile(this.state.dataUrl);

    const image = new Image();

    image.src = URL.createObjectURL(blob);

    //IMPORTANT: WAIT FOR IMAGE TO LOAD BEFORE TRYING TO CROP
    image.onload = () => {
      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height,
      );

      new Promise((resolve) => {
        canvas.toBlob((file: any) => {
          resolve(file);
        }, 'image/jpeg');
      }).then((response: any) => {
        const blob = new Blob([response]);
        const file = new File([blob], this.state.fileName);
        this.setState({ file });
      });
    };
  };

  fileUploadHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) this.handleChange(e.target.files);
  }

  render() {
    return (
      <div className={styles.background}>
        <OutsideClickHandler
          onOutsideClick={() => {
            this.props.onUploadModal();
          }}
        >
          <div className={styles.crop_modal_block__div}>
            <header className={styles.imageUpload_block_header__div}>
              <strong>나의 가장 멋진 사진!</strong>
            </header>
            <div className="row" style={{ margin: 'auto' }}>
              {/* show place holder image until file is uploaded */}
              {this.state.imgLoaded ? (
                <ReactCrop
                  src={this.state.dataUrl}
                  crop={this.state.crop}
                  onChange={this.onCropChange}
                  onComplete={this.onComplete}
                  onImageLoaded={this.onImageLoaded}
                  imageStyle={this.props.style ? this.props.style : {}}
                  style={this.props.style ? this.props.style : {}}
                />
              ) : (
                <div className={styles.before_upload_img_block__div}>
                  <FcConferenceCall />
                  <p>여러분의 이력서에서 보여질 멋진 사진을 선택해주세요 :)</p>
                  <input type="file" onChange={this.fileUploadHandler} />
                </div>
              )}
            </div>
            <div className={styles.bottom_buttons_block__div}>
              <button className={styles.bottom_upload_button__button}>
                업로드
              </button>
              <input type="file" onChange={this.fileUploadHandler} />
              <button
                className={styles.bottom_save_button__button}
                onClick={() => {
                  this.props.onGetBlobFile(this.state.file);
                  this.props.onUploadModal();
                }}
              >
                저장하기
              </button>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    );
  }
}
