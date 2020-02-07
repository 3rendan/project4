import React, { Component } from 'react';

class Records extends Component {


  // componentDidMount() {
  //     this.getRecords();
  // }
  //
  // getRecords = () =>{
  //     fetch('http://localhost:3000/records')
  //         .then(response => response.json())
  //         .then(json => this.setState({records: json}))
  //     .catch(error => console.error(error))
  // }
  deleteRecord = (id) =>{
    const index = id - 1;
    fetch('records/' + id,
      {
        method: 'GET'
      })
      .then(data => {
        this.setState({
          records: [
            ...this.state.records.slice(0, index),
            ...this.state.records.slice(index + 1)
          ]
        })
      })
  }
  render () {
    return (
      <div className="col-sm-9">
        { this.props.records.map( record => {
            return  (
                <div key={record.id} className="records">
                    <h3>{ record.artist } : { record.title } </h3>
                    <p>It was released in { record.year } on { record.label }</p>
                    <small>It is an { record.format }</small><br />
                    <button onClick={() => this.deleteRecord(record.id)}> X </button>
                </div>
            )
        })}
      </div>
    )
  }
}

export default Records;
