import React, { Component } from 'react'
import Records from './Records.js';
import axios from 'axios'

class Show extends Component {
  constructor(props){
    super(props)
    this.state = {
          artist: '',
          title: '',
          label: '',
          format: '',
          year: ''
      }
    this.showRecord = this.showRecord.bind(this)
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

    showRecord(id) {
      // console.log(id);
        axios.get(`http://localhost:3000/records/${id}/`)
        .then(response => this.setState({
            artist: response.data.artist,
            title: response.data.title,
            format: response.data.format,
            label: response.data.label,
            year: response.data.year
        }));
    }
    render () {
        return (
          <>
            { this.props.records && this.props.records.map((record) => {
            <div key={record.id} className="records col-sm-7">
                <h3><span className="artist">{ record.artist } </span>| <span className="release">{ record.title } </span></h3>
                <p>It was released in { record.year } on { record.label }</p>
                <small>It is an { record.format }</small><br />
                <><button className="btn btn-warning" onClick={() => this.props.handleUpdate(record.id)}> UPDATE </button></>
                <><button className="btn btn-danger" onClick={() => this.props.deleteRecord(record.id, i)}> DELETE </button></>
            </div>
          </>
        )
      })
    }
}


export default Show
