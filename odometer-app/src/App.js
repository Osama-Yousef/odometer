import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Odometer from './Odometer';

function App() {
  return (
    <>
      <Header greeting='Hello All !!!'/>
      <Odometer/>
      <Footer trademark='Copyright Osama-Yousef 2020'/>
    </>
  );
}

export default App;