import React from 'react';
import { render } from 'react-dom';

export default class EducationalExperienceUL extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const major = <li>Major: {this.props.major}</li>
    const minor = this.props.minor ? <li>Minor: {this.props.minor}</li> : <li>Minor: -</li>
    return(
      <ul className='list-disc'>
        {major}
        {minor}
      </ul>
    );
  };
};
