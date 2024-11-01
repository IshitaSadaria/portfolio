import { useState } from 'react';

import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Extra from './components/Extra/Extra';
import Recognition from './components/Recognition/Recognition';

import userData from './data/data.json';
import './App.css';
import Consent from './components/Consent/Consent';

const App = () => {
  const [state] = useState(userData);
  const { header, experience, education, projects, others, consent, recognition } = state;

  return (
    <div className="wrapper size-A4">
      <div className="_header">
        <Header data={header} />
      </div>

      <div className="sections">
        <div className="left-section">
          <div className="_experience">
            <Experience data={experience} />
          </div>
          <div className="_recognition">
            <Recognition data={recognition} />
          </div> 
        </div>
        
        <div className="right-section">
          {projects && Array.isArray(projects) && projects.filter(_p => !_p.isHidden).length > 0 && <div className="_projects">
            <Projects data={projects} />
          </div>}
          <div className="_extras">
            <Extra data={others} />
          </div>
          <div className="_education">
            <Education data={education} />
          </div>
        </div>
      </div>

      {!consent.isHidden && <Consent data={consent} />}
    </div>
  );
}

export default App;
