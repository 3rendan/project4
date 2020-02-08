import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Records from './components/Records.js'
import NewRecords from './components/NewRecords.js'
import Update from './components/Update.js'
import Show from './components/Show.js'
import axios from 'axios'
const User = ({match}) =>{
  return (<h1>{match.params.username}</h1>)
}
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
// showRecord = (id) => {
  // axios.get(`http://localhost:3000/records/${id}/`)
  // .then(response => this.setState({
  //     artist: response.data.artist,
  //     title: response.data.title,
  //     format: response.data.format,
  //     label: response.data.label,
  //     year: response.data.year
  // }));
// }

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
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={
            {color: 'green'}
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={
            {color: 'green'}
          }>About</NavLink>
        </li>
        <li>
          <NavLink to="/user/Peter" exact activeStyle={
            {color: 'green'}
          }>Him</NavLink>
        </li>
      </ul>
        <Route path='/' exact strict render={
          () => {
            return ( <h1>Welcome Home</h1>);
          }
        }/>
        <Route path='/about' exact strict render={
          () => {
            return ( <h1>Welcome About</h1>);
          }
        }/>
        <Route path='/user/:username' exact strict component={User} />
      </div>
    </Router>
  );
}
}

export default App;
