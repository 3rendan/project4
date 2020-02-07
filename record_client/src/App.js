import React from 'react';
import './App.css';
import Records from './components/Records.js'
import NewRecords from './components/NewRecords.js'
function App() {
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
