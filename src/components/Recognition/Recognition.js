import { useState } from 'react';
import './Recognition.css';

const Recognitions = ({ data }) => {
  const [achievementState] = useState(data);

  return (
    <div className="recognition-wrapper">
      <h3 className="section-heading recognition-header-text">Rewards & Appreciation</h3>
      {achievementState.filter(a => !a.isHidden).map((recognition, index) => (
        <div className="recognition" key={`recognition-${index}`}>
          <div className="recognition-name">
            {recognition.name}
          </div>
          <div className="project-desc">
            {recognition.desc}
          </div>
          {recognition.link && (
            <div className="recognition-link">
              <a href={recognition.link} target="_blank" rel="noopener noreferrer">
                View Certification
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Recognitions;