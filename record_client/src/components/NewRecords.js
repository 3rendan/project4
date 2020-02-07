import React, { Component } from 'react';

class NewRecords extends Component {
    state = {
      records : [],
      formInputs: {
        artist: '',
        title: '',
        label: '',
        year: ''
      }
    }
  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
  handleSubmit  = (event) =>{
    event.preventDefault()
    fetch('http://localhost:3000/records', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
 })
   .then(createdRecord => {
     return createdRecord.json()
   })
   .then(jsonedRecord => {
     // reset the form
     // add notice to notices
     this.setState({
       formInputs: {
         artist: '',
         title: '',
         label: '',
         format: ''
       },
       records: [jsonedRecord, ...this.state.records]
     })
   })
   .catch(error => console.log(error))

  render () {
    return (
      <div className="col-sm-3">
        <nav>
          <h1> New Records?</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="artist" >Artist: </label>
              <input
                type="text"
                id="artist"
                value={this.state.formInputs.artist}
                onChange={this.handleChange}
              /><br/>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                value={this.state.formInputs.title}
                onChange={this.handleChange}
              /><br/>
              <label htmlFor="label">Label: </label>
              <input
                type="text"
                id="label"
                value={this.state.formInputs.label}
                onChange={this.handleChange}
              /><br/>
              <label htmlFor="format">Format: </label>
              <input
                type="text"
                id="format"
                value={this.state.formInputs.format}
                onChange={this.handleChange}
              /><br/>
              <label htmlFor="year">Released when?: </label>
              <input
                type="integer"
                id="year"
                value={this.state.formInputs.year}
                onChange={this.handleChange}
              /> <br/>
              <input type="submit btn-default" className="submit" />
            </form>
          </nav>
      </div>
    )
  }
}

export default NewRecords;
