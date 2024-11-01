import { useState } from "react";
import "./Interests.css";

const Interests = ({ data }) => {
  const [interestsState] = useState(data);

  return (
    <div className="interests-wrapper">
      <h3 className="section-heading sub-comp-header">Interests</h3>
      <div className="interests">
  {interestsState.map((interest, index) => {
    if (typeof interest === 'string') {
      return <span key={index}>{interest}</span>;
    } else {
      return (
        <span key={index}>
          <a href={interest.link} target="_blank" rel="noopener noreferrer">
            {interest.name} {interest.name === "Web Designing" ? "(View here)" : ""}
          </a>
          {index < interestsState.length - 1 ? ", " : ""}
        </span>
      );
    }
  })}
</div>
    </div>
  );
};

export default Interests;
