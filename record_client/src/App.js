import React from 'react';
import './App.css';
import Records from './components/Records.js'
import NewRecords from './components/NewRecords.js'
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <NewRecords />
          </div>
          <div className='col-sm-9'>
            <Records />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
