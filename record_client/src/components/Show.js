import React, { Component } from 'react'
import axios from 'axios'

class Show extends Component {
  state = {
      artist: '',
      title: '',
      label: '',
      format: '',
      year: ''
  }

    showRecord = (id) => {
        axios.get(`http://localhost:3001/records/${id}/`)
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
          <div className='col-sm-9'>
            <h1>howdy</h1>
          </div>
        )
    }
}


export default Show
