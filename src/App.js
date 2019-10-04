import React from 'react';
import './App.css';

import Header from './Header/Header.jsx';
import Aside from './Aside/Aside';

function App() {
  return (
    <div className='App'>
      <Aside />
      <div style={{width: '100%'}}>
        <div className='app-header'>
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
