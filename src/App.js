import React from 'react';
import './App.css';

import Header from './Header/Header.jsx';
import Aside from './Aside/Aside';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <div className='App'>
      <Aside />
      <div style={{width: '100%'}}>
        <div className='app-header'>
          <Header />
        </div>
        <div className='app-content'>
          <Content />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
