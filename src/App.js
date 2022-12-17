import React , {Component} from 'react';
import Nav from './components/Nav';
import Carousal from "./components/Carousal";
import Footer from './components/Footer';
import BottomSection from './components/BottomSection';
import TopSection from './components/TopSection';






const App = () =>
{

  return (
    <>
    
      <Nav />
      <TopSection />
      <Carousal />
      <BottomSection />
      <div className=' relative z-40'>
      <Footer />
      </div>

      
    </>
  )
}

export default App;