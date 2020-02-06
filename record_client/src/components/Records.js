import React, { Component } from 'react';

class Records extends Component {
  state = {
      records: []
  }

  componentDidMount() {
      this.getRecords();
  }

  getRecords = () =>{
      fetch('http://localhost:3000/records')
          .then(response => response.json())
          .then(json => console.log(json))
      .catch(error => console.error(error))
  }
  render () {
    return (
      <h1>Records</h1>
    )
  }
}

export default Records;
