import React from 'react';
import './App.css';
import Records from './components/Records.js'
import NewRecords from './components/NewRecords.js'
class App extends Component {
  componentDidMount() {
  this.getRecords()
}
getRecords = () =>{
  fetch('http://localhost:3000/records')
    .then(response => response.json())
    .then(json => this.setState({records: json}))
    .catch(error => console.error(error))
}
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <>
            <NewRecords />
          </>
          <>
            <Records />
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
