import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Intertainment from  './pages/Intertainment';
import  Biography from './pages/Biography';
import Contacts from './pages/Contact';
import Help from './pages/Help';
import Default from './pages/Default';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleRoom  from './pages/SingleRoom'
import {Switch, Route } from  'react-router-dom'
import './App.css';

function App() {
  return (
     <>
    <div className="App">
     {/*common bar for all pages */} 
      <Navbar />
      {/* end common bar for all pages */} 
 {/*common bar for all pages */}
      <Switch>
      <Route  exact path ="/" component= {Home} />
      <Route  exact path ="/rooms" component= {Rooms} />
      <Route  exact path ="/intertainment" component= {Intertainment} />
      <Route  exact path ="/Biography" component= {Biography} />
      <Route  exact path ="/Contacts" component= {Contacts} />
      <Route  exact path ="/Help" component= {Help} />
      <Route  exact path ="/Rooms/:id" component= {Rooms} />
      <Route  exact path ="/SingleRoom/:slug" component= {SingleRoom} />
      <Route   component= {Default} />

      </Switch>
     
      
     {/* end common bar for all pages */} 
   
      {/* common footer for all pages */} 
     <Footer />
     {/* end common footer for all pages */} 


    </div>
</>
  );
}

export default App;

