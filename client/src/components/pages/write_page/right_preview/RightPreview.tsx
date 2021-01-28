import React from 'react';
import styles from '../../../../styles/pages/write_page/right_preview/RightPreview.module.css';

//* import redux state types
import { ExperienceItem } from '../../../../modules/changeField/workExperience/types';
import { SkillItem } from '../../../../modules/changeField/skills/types';
import { AeaItem } from '../../../../modules/changeField/aea/types';
import { EducationItem } from '../../../../modules/changeField/education/types';

interface RightPreviewProps {
  values: {
    info: {
      username: string;
      avatar: string;
      profile: string;
      contact: {
        address: string;
        phone: string;
        email: string;
        link: {
          facebook: string;
          twitter: string;
          blog: string;
          github: string;
          youtube: string;
          instagram: string;
        };
      };
    };
    skills: SkillItem[];
    workExperience: ExperienceItem[];
    educations: EducationItem[];
    aeas: AeaItem[];
  };
}

const RightPreview: React.FC<RightPreviewProps> = ({ values }) => {
  //? user_info
  const { username, profile, contact } = values.info;

  //? user_skills
  const printSkills = values.skills.map((ele) => {
    return (
      <li key={ele.skill}>
        <span>●</span>
        <div>
          <strong>{ele.skill}</strong>
          <p>{ele.desc}</p>
        </div>
      </li>
    );
  });

  //? user_experience
  const printExperience = values.workExperience.map((ele, index) => {
    const printworkDesc = ele.desc.map((ele, index) => {
      return (
        <li key={index}>
          {ele.description && (
            <span className={styles.experience_list_dot__span}>●</span>
          )}
          {ele.description}
        </li>
      );
    });
    return (
      <li key={index}>
        <span className={styles.experience_date}>
          {ele.start}
          {ele.end && <> ~ </>}
          {!ele.inOffice ? <> {ele.end}</> : <> ~ 재직중</>}
        </span>

        <div>
          <strong>{ele.companyName}</strong>
          <p>{ele.positionName}</p>
          <ul>{printworkDesc}</ul>
        </div>
      </li>
    );
  });

  //? Render_educations
  const printEducations = values.educations.map((ele, index) => {
    return (
      <li key={index}>
        <span className={styles.experience_date}>
          {ele.start}
          {ele.end && <span> ~ </span>} {ele.end}
        </span>
        <div>
          <strong>{ele.eduTitle}</strong>
          <p>{ele.eduDesc}</p>
        </div>
      </li>
    );
  });

  //? Render_AEAs
  const printAeas = values.aeas.map((ele, index) => {
    return (
      <li key={index}>
        <span className={styles.experience_date}>{ele.aeaDate}</span>
        <div>
          <strong>{ele.aeaTitle}</strong>
          <p>{ele.aeaDesc}</p>
        </div>
      </li>
    );
  });

  //* =========================
  //*     RENDER
  //* =========================
  return (
    <section className={styles.container}>
      <h1 className={styles.name__h1}>{username}</h1>
      <div className={styles.contact_block__div}>
        <ul>
          <li>이메일 : {contact.email}</li>
          <li>주소 : {contact.address}</li>
          <li>연락처 : {contact.phone}</li>
        </ul>
      </div>

      <div className={styles.profile_block__div}>
        <span>{profile}</span>
      </div>

      {values.skills.length >= 1 && (
        <div className={styles.skills_block__div}>
          <h2>기술</h2>
          <ul>{printSkills}</ul>
        </div>
      )}

      {values.workExperience.length >= 1 && (
        <div className={styles.experience_block__div}>
          <h2>경력</h2>
          <ul>{printExperience}</ul>
        </div>
      )}

      {values.educations.length >= 1 && (
        <div className={styles.experience_block__div}>
          <h2>학력 및 교육 이수</h2>
          <ul>{printEducations}</ul>
        </div>
      )}
      {values.aeas.length >= 1 && (
        <div className={styles.experience_block__div}>
          <h2>수상 및 기타 활동</h2>
          <ul>{printAeas}</ul>
        </div>
      )}
    </section>
  );
};

export default RightPreview;
