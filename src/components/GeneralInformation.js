import React from 'react';

export default class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '[Your Name]',
      email: 'your@email.com',
      number: '123-456-7890',
      address: '123 That Street',
    };

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // handleChange(e)


  render() {
    return(
      <div className='flex flex-col text-emerald-500 gap-1'>
        <input className='text-5xl p-2  border-b-4 border-emerald-500' id='name' type='text' value={this.state.name} onChange={this.handleChange} />
        <div className='flex justify-start gap-4'>
          <input className='w-32'type='email' id='email' value={this.state.email} onChange={this.handleChange} />
          <span>|</span>
          <input className='w-28' type='tel' id='number' value={this.state.number} onChange={this.handleChange} />
          <span>|</span>
          <input className='w-36' type='text' id='address' value={this.state.address} onChange={this.handleChange} />
        </div>
      </div>
    );
  };
};
