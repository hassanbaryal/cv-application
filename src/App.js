import React from 'react';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="w-8/12 min-h-full p-7 bg-white shadow-md shadow-gray-800/50 flex flex-col gap-4">
        <GeneralInformation />
        <EducationalExperience />
        <WorkExperience />
      </div>
    );
  };
};

export default App;
