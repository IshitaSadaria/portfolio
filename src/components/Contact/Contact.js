import React from 'react';
import { generateResumePdf } from '../../utils/generateResumePdf';

const Contact = ({ data }) => {
  const handleResumeClick = () => {
    generateResumePdf(data);
  };

  return (
    <div>
      <ul>
        {data.contact.map((contact, index) => (
          <li key={index}>
            {contact.type === 'Resume' ? (
              <button onClick={handleResumeClick}>
                {contact.value}
              </button>
            ) : (
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.value}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;