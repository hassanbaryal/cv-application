import React from 'react';
import GeneralInformation from './components/GeneralInformation';

class App extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="w-8/12 h-full p-7 bg-white shadow-md shadow-gray-800/50 flex flex-col g-4">
        <GeneralInformation/ >
      </div>
    );
  };
};

export default App;
