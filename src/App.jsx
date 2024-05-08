import GeneralInformation from "./components/general-information";
import EducationalExperience from "./components/educational-experience";
import PracticalExperience from "./components/practical-experience";

function App(){
  return (
    <div>
      <div id="input">
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
      <div id="display">

      </div>
    </div>
  );
}

export default App;