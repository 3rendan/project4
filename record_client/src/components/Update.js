import React, { Component } from 'react'
import axios from 'axios'


class Update extends Component {
    // state = {
    //     artist: '',
    //     title: '',
    //     label: '',
    //     format: '',
    //     year: ''
    // }
    componentDidMount = () => {
        axios.get('http://localhost:3001/records/id/' + this.findID())
        .then(response => {
            const state = {
                artist: response.data.artist,
                title: response.data.title,
                format: response.data.format,
                label: response.data.label,
                year: response.data.year
            }
        })
    }

    //put route
    // handleUpdate = (e) => {
    //     e.preventDefault();
    //     const records = {
    //         artist: this.state.artist,
    //         title: this.state.title,
    //         format: this.state.format,
    //         label: this.state.label,
    //         year: this.state.year
    //     };
    //     const updatedRecord = [];
    //     updatedRecord.push(records);
    //     if(this.state.title){
    //         axios.put('http://localhost:3001/records/id/' + this.findID(), {...records})
    //     }
    // }
    render () {
        return (
            <div>
                <div>
                    <div>Update the record</div>
                    <div>
                        Update the record here. <br/>
                        Change the artist, title, label, format, or year.<br/>
                    </div>
                </div>

                <form onSubmit={this.handleUpdate}>
                      <label htmlFor="artist" >Artist: </label>
                      <input
                        type="text"
                        id="artist"
                        value={this.state.formInputs.artist}
                        onChange={this.handleUpdate}
                      /><br/>
                      <label htmlFor="title">Title: </label>
                      <input
                        type="text"
                        id="title"
                        value={this.state.formInputs.title}
                        onChange={this.handleUpdate}
                      /><br/>
                      <label htmlFor="label">Label: </label>
                      <input
                        type="text"
                        id="label"
                        value={this.state.formInputs.label}
                        onChange={this.handleUpdate}
                      /><br/>
                      <label htmlFor="format">Format: </label>
                      <input
                        type="text"
                        id="format"
                        value={this.state.formInputs.format}
                        onChange={this.handleUpdate}
                      /><br/>
                      <label htmlFor="year">Year: </label>
                      <input
                        type="integer"
                        id="year"
                        value={this.state.formInputs.year}
                        onChange={this.handleUpdate}
                      /> <br/>
                      <input type="submit" className="submit btn-default" />
                    </form>
                    <div>
                        <button className='btn btn-primary' type="submit">Submit Changes</button>
                    </div>

                <div>
                    <a href={"/records/" + this.findID()}>View the updated album</a>
                    <a href="/records/">See your entire collection</a>
                </div>
            </div>
        )
    }
}


export default Update
