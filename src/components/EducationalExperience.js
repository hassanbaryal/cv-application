import React from 'react';
import EducationalExperienceUL from './EducationExperienceUL';
import uniqid from 'uniqid';

export default class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      major: '',
      minor: '',
      dateStart: '',
      dateEnd: '',
      id: uniqid(),
      isHovering: false,
      experiences: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleMouseOver(id) {
    this.setState({
      experiences: this.state.experiences.map((experience) => {
        if (experience.id === id) return {
          school: experience.school,
          degree: experience.degree,
          major: experience.major,
          minor: experience.minor,
          dateStart: experience.dateStart,
          dateEnd: experience.dateEnd,
          id: experience.id,
          isHovering: true,
        };
        return experience;
      }),
    })
  }

  handleMouseLeave(id) {
    this.setState({
      experiences: this.state.experiences.map((experience) => {
        if (experience.id === id) return {
          school: experience.school,
          degree: experience.degree,
          major: experience.major,
          minor: experience.minor,
          dateStart: experience.dateStart,
          dateEnd: experience.dateEnd,
          id: experience.id,
          isHovering: false,
        };
        return experience;
      }),
    })
  }

  submitForm(e) {
    e.preventDefault();
    if (document.querySelector('#education-form').checkValidity()) {
      this.toggleForm();
      this.addExperience();
    } else
      alert('Please input the required fields (marked by *)');
  };

  addExperience() {
    this.setState({
      experiences: this.state.experiences.concat({
        school: this.state.school,
        degree: this.state.degree,
        major: this.state.major,
        minor: this.state.minor,
        dateStart: this.state.dateStart,
        dateEnd: this.state.dateEnd,
        id: this.state.id,
        isHovering: this.state.isHovering,
      }),
    });

    this.resetState();
  };

  deleteExperience(id) {
    this.setState({
      experiences: this.state.experiences.filter(experience => experience.id !== id)
    })
  }

  toggleForm() {
    document.querySelector('#education-form').classList.toggle('invisible');
  }

  resetState() {
    this.setState({
      school: '',
      degree: '',
      major: '',
      minor: '',
      dateStart: '',
      dateEnd: '',
      id: uniqid(),
      isHovering: false,
    });
  };

  render() {
    const { experiences } = this.state;
    return(
      <div className='flex flex-col gap-2'>
        <h1 className='text-emerald-500 text-2xl'>Education</h1>
        {
          experiences.map((experience) => {
            return(
              <div key={experience.id} className="experience relative flex flex-col" onMouseEnter={() => this.handleMouseOver(experience.id)} onMouseLeave={() => this.handleMouseLeave(experience.id)}>
                <h2 className='font-extrabold flex justify-between'>
                  <p>{experience.degree} | {experience.school}</p>
                  <p>{experience.dateStart} / {experience.dateEnd}</p>
                </h2>
                  <EducationalExperienceUL major={experience.major} minor={experience.minor}/>
                  {
                    experience.isHovering && (
                      <button type='button' className='w-24 h-7 rounded-md bg-red-500 hover:bg-red-400 absolute bottom-1 right-1' onClick={() => this.deleteExperience(experience.id)}>Delete</button>
                    )
                  }
                  
              </div>
            );
          })
        }
        <form className='invisible flex flex-col gap-2' id='education-form'>
          <div className='form-section'>
            <label htmlFor='school' className='label'>School*</label>
            <input type="text" value={this.state.school} onChange={this.handleChange} className='p-1' id='school' required/>
          </div>
          <div className='form-section'>
            <label htmlFor='degree' className='label'>Degree*</label>
            <input type="text" value={this.state.degree} onChange={this.handleChange} className='p-1' id='degree' required/>
          </div>
          <div className='form-section-date flex gap-1'>
            <div className="form-section w-3/6">
              <label htmlFor='dateStart' className='label'>Start Date*</label>
              <input type="date" value={this.state.dateStart} onChange={this.handleChange} className='p-1' id='dateStart' required/>
            </div>
            <div className="form-section w-3/6">
              <label htmlFor='dateEnd' className='label'>End Date (empty indicates ongoing)</label>
              <input type="date" value={this.state.dateEnd} onChange={this.handleChange} className='p-1' id='dateEnd' />
            </div>
          </div>
          <div className='form-section'>
            <label htmlFor='major' className='label'>Major*</label>
            <input type="text" value={this.state.major} onChange={this.handleChange} className='p-1' id='major' required/>
          </div>
          <div className='form-section'>
            <label htmlFor='minor' className='label'>Minor</label>
            <input type="text" value={this.state.minor} onChange={this.handleChange} className='p-1' id='minor' />
          </div>
          <button type='submit' className='w-24 h-7 rounded-md bg-emerald-500 hover:bg-emerald-400 self-center' onClick={(e) => this.submitForm(e)}>Submit</button>
        </form>
        <button type='button' className='w-16 h-7 rounded-md bg-emerald-500 hover:bg-emerald-400 self-center' onClick={this.toggleForm}>+</button>
      </div>
    );
  };
};
