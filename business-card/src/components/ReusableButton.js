import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ReusableButton = ({ backgroundColor, onClick, buttonText, textColor }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: '5px 10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        margin:'10px',
      
      }}
      onClick={onClick}
    >
      {backgroundColor === 'white' ? (
        <FaEnvelope style={{ marginRight: '5px',marginLeft:'5px' }} />
      ) : (
        <FaLinkedin style={{ marginRight: '5px',marginLeft:'5px' }} />
      )}
      {buttonText}
    </button>
  );
};

export default ReusableButton;
