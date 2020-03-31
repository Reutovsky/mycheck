import React from 'react';
import { isMobile } from 'react-device-detect';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Benefits } from './components/Benefits';
import { Howitworks } from './components/Howitworks';
import { Cost } from './components/Cost';

function App() {
  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      <Header />
      <Main />
      <Benefits />
      <Howitworks />
      <Cost />
    </div>
  );
}

export default App;
