import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Records from './components/Records.js'
import NewRecords from './components/NewRecords.js'
import Update from './components/Update.js'
import Show from './components/Show.js'
import axios from 'axios'

class App extends React.Component {
  state = {
    records: false
  }
  componentDidMount() {
  this.getRecords()
}
  getRecords = () =>{
    fetch('http://localhost:3000/records')
      .then(response => response.json())
      .then(json => this.setState({records: json}))
      .catch(error => console.error(error))
  }
  showRecord = (id) => {
    fetch(`http://localhost:3000/records/${id}`)
    .then(response => response.json())
    .then(json => this.setState({records: json}))
    .catch(error => console.error(error))
  }
  handleUpdate = (id) => {
      // e.preventDefault();
      // console.log(`http://localhost:3001/records/${id}`)
      const records = {
          artist: this.state.artist,
          title: this.state.title,
          format: this.state.format,
          label: this.state.label,
          year: this.state.year
      };
      const updatedRecord = [];
      console.log(id)
      fetch(`http://localhost:3000/records/${id}`,
        {
          method: 'PUT'
        })
       .then(updatedRecord => {
         return updatedRecord.json()
       })
       .then(updatedRecord => {
         // updatedRecord.push(records);
         console.log(updatedRecord)
         // this.props.getRecords()
       })
       .catch(error => console.log(error))
      }
  deleteRecord = (id, i) =>{
    fetch('http://localhost:3000/records/' + id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          records: [
            ...this.state.records.slice(0, i),
            ...this.state.records.slice(i + 1)
          ]
        })
      })
    }
render(){
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <div className="App-header">
            <h1>A Collection of Physical Recordings</h1>
          </div>
          <div className='row'>
              <><Route path="/" exact render= {
                () => {
                  return ( <h1>BEETLEJUICE</h1> );
                }
              }/></>
              <><Route path="/skeletor" exact render= {
                () => {
                  return (
                    <div clasName="col-sm-offset-4 col-sm-6">
                      <h1>SKELETOR | loving kindness</h1>
                      <img src="/src/mettaSkeletor.jpg" />
                    </div>
                  );
                }
              }/></>
              <>
                <NewRecords records={this.state.records} getRecords={this.getRecords} />
              </>
              <>
                <Records deleteRecord={this.deleteRecord} handleUpdate={this.handleUpdate} records={this.state.records} />
              </>
            </div>
        </div>
      </div>
    </Router>
  );
}
}

export default App;
