import React from 'react';
import './App.css';
import Records from './components/Records.js'
import NewRecords from './components/NewRecords.js'
import Update from './components/Update.js'
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

handleUpdate = (id) => {
    // e.preventDefault();
    const records = {
        artist: this.state.artist,
        title: this.state.title,
        format: this.state.format,
        label: this.state.label,
        year: this.state.year
    };
    const updatedRecord = [];
    updatedRecord.push(records);
    if(this.state.title){
        axios.put('http://localhost:3001/records/id/' + this.findID(), {...records})
    }
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
    <div className="App">
      <div className='container'>
        <div className='row'>
          <>
            <NewRecords records={this.state.records} getRecords={this.getRecords} />
          </>
          <>
            <Records deleteRecord={this.deleteRecord} handleUpdate={this.handleUpdate} records={this.state.records} />
          </>
        </div>
      </div>
    </div>
  );
}
}

export default App;
