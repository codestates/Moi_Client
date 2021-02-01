import React from 'react';
import Certificate from '../../../../components/pages/write_page/write/certificate/Certificate';
import useCertificateChangeField from '../../../../hooks/pages/write_page/certificate/useCertificateChangeField';
const CertificateContainer: React.FC = () => {
  const {
    addCertificate,
    certificates,
    onChangeCertificateFields,
    onDeleteCertificateFields,
    onToggleCetrificateDropdown,
  } = useCertificateChangeField();

  return (
    <>
      <Certificate
        addCertificate={addCertificate}
        certificates={certificates}
        onChangeCertificateFields={onChangeCertificateFields}
        onDeleteCertificateFields={onDeleteCertificateFields}
        onToggleCetrificateDropdown={onToggleCetrificateDropdown}
      />
    </>
  );
};

export default CertificateContainer;
