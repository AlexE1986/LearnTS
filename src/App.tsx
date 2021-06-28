import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import TopMenu from './components/TopMenu/TopMenu';
import Body from './components/Body/Body';


function App() {
  return (
    <div className='container center'>
      <Header />
      <Menu />
      <TopMenu />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
