import React from 'react';
import { isMobile } from 'react-device-detect';
import { Header } from './components/Header';

function App() {
  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      <Header />
    </div>
  );
}

export default App;
