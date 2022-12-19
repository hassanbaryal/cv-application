import React from 'react';
import uniqid from 'uniqid';

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      dateS: '',
      dateE: '',
      pointOne: '',
      pointTwo: '',
      pointThree: '',
      id: uniqid(),
      isHovering: false,
      experiences: [],
    }

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
          title: experience.title,
          company: experience.company,
          dateS: experience.dateS,
          dateE: experience.dateE,
          pointOne: experience.pointOne,
          pointTwo: experience.pointTwo,
          pointThree: experience.pointThree,
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
          title: experience.title,
          company: experience.company,
          dateS: experience.dateS,
          dateE: experience.dateE,
          pointOne: experience.pointOne,
          pointTwo: experience.pointTwo,
          pointThree: experience.pointThree,
          id: experience.id,
          isHovering: false,
        };
        return experience;
      }),
    })
  }

  submitForm(e) {
    e.preventDefault();
    if (document.querySelector('#experience-form').checkValidity()) {
      this.toggleForm();
      this.addExperience();
    } else
      alert('Please input the required fields (marked by *)');
  };

  addExperience() {
    this.setState({
      experiences: this.state.experiences.concat({
        title: this.state.title,
        company: this.state.company,
        dateS: this.state.dateS,
        dateE: this.state.dateE,
        pointOne: this.state.pointOne,
        pointTwo: this.state.pointTwo,
        pointThree: this.state.pointThree,
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
    document.querySelector('#experience-form').classList.toggle('invisible');
  }

  resetState() {
    this.setState({
      title: '',
      company: '',
      dateS: '',
      dateE: '',
      pointOne: '',
      pointTwo: '',
      pointThree: '',
      id: uniqid(),
      isHovering: false,
    });
  };

  render() {
    const { experiences } = this.state;
    return(
      <div className='flex flex-col gap-2'>
        <h1 className='text-emerald-500 text-2xl'>Work Experience</h1>
        {
          experiences.map((experience) => {
            return(
              <div key={experience.id} className="experience relative flex flex-col" onMouseEnter={() => this.handleMouseOver(experience.id)} onMouseLeave={() => this.handleMouseLeave(experience.id)}>
                <h2 className='font-extrabold flex justify-between'>
                  <p>{experience.title} | {experience.company}</p>
                  <p>{experience.dateS} / {experience.dateE}</p>
                </h2>
                <ul className='list-disc'>
                  <li>{experience.pointOne}</li>
                  <li>{experience.pointTwo}</li>
                  <li>{experience.pointThree}</li>
                </ul>
                {
                  experience.isHovering && (
                    <button type='button' className='w-24 h-7 rounded-md bg-red-500 hover:bg-red-400 absolute bottom-1 right-1' onClick={() => this.deleteExperience(experience.id)}>Delete</button>
                  )
                }
                  
              </div>
            );
          })
        }
        <form className='invisible flex flex-col gap-2' id='experience-form'>
          <div className='form-section'>
            <label htmlFor='title' className='label'>Job Title*</label>
            <input type="text" value={this.state.title} onChange={this.handleChange} className='p-1' id='title' required/>
          </div>
          <div className='form-section'>
            <label htmlFor='company' className='label'>Company*</label>
            <input type="text" value={this.state.company} onChange={this.handleChange} className='p-1' id='company' required/>
          </div>
          <div className='form-section-date flex gap-1'>
            <div className="form-section w-3/6">
              <label htmlFor='dateS' className='label'>Start Date*</label>
              <input type="date" value={this.state.dateS} onChange={this.handleChange} className='p-1' id='dateS' required/>
            </div>
            <div className="form-section w-3/6">
              <label htmlFor='dateE' className='label'>End Date (empty indicates ongoing)</label>
              <input type="date" value={this.state.dateE} onChange={this.handleChange} className='p-1' id='dateE' />
            </div>
          </div>
          <div className='form-section'>
            <label htmlFor='pointOne' className='label'>Point One*</label>
            <input type="text" value={this.state.pointOne} onChange={this.handleChange} className='p-1' id='pointOne' required/>
          </div>
          <div className='form-section'>
            <label htmlFor='pointTwo' className='label'>Point Two*</label>
            <input type="text" value={this.state.pointTwo} onChange={this.handleChange} className='p-1' id='pointTwo' />
          </div>
          <div className='form-section'>
            <label htmlFor='pointThree' className='label'>Point Three*</label>
            <input type="text" value={this.state.pointThree} onChange={this.handleChange} className='p-1' id='pointThree' />
          </div>
          <button type='submit' className='w-24 h-7 rounded-md bg-emerald-500 hover:bg-emerald-400 self-center' onClick={(e) => this.submitForm(e)}>Submit</button>
        </form>
        <button type='button' className='w-16 h-7 rounded-md bg-emerald-500 hover:bg-emerald-400 self-center' onClick={this.toggleForm}>+</button>
      </div>
    );
  };
}