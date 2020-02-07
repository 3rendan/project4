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
          .then(json => this.setState({records: json}))
      .catch(error => console.error(error))
  }
  render () {
    console.log(this.state.records);
    return (
      <div className="col-sm-9">
        {this.state.records.map( record => {
            return  (
                <div key={record.id} className="records">
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

export default Records;
