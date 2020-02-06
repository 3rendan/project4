import React, { Component } from 'react';

class NewRecords extends Component {
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
      <div>
        {this.state.records.map( notice => {
            return  (
                <div key={record.id} className="record">
                    <h3>{ record.artist } : { record.title } </h3>
                    <p>It was released in { record.year } on { record.label }</p>
                    <small>It is an {record.format }</small>
                </div>
            )
        })}
    </div>
    )
  }
}

export default NewRecords;
