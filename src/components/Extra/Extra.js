import Certifications from "./Certifications/Certifications";
import Achievements from "./Achievements/Achievements";
import Tools from "./Tools/Tools";
import Languages from "./Languages/Languages";
import Interests from "./Interests/Interests";
import { isEmpty } from "../../utils/isEmpty";
import './Extra.css';

const Extra = ({ data }) => {
  
  const { certificates, achievements, softwares, interests, languages, showOnly } = data;

  return (
    <div className="extras-wrapper">
      {!isEmpty(certificates) && showOnly['certificates'] && <Certifications data={certificates} />}
      {!isEmpty(achievements) && showOnly['achievements'] && <Achievements data={achievements} />}
      {!isEmpty(softwares) && showOnly['softwares'] && <Tools data={softwares} />}
      {!isEmpty(interests) && showOnly['interests'] && <Interests data={interests} />}
      {!isEmpty(languages) && showOnly['languages'] && <Languages data={languages} />}
    </div>
  );
};

export default Extra;
