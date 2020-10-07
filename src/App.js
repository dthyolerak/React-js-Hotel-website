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
      <Navbar   className="wildth"/>
      {/* end common bar for all pages */} 
 {/*common bar for all pages */}
      <Switch>
      <Route  exact path ="/" component= {Home} className="wildth" />
      <Route  exact path ="/rooms" component= {Rooms}  className="wildth" />
      <Route  exact path ="/intertainment" component= {Intertainment}  className="wildth" />
      <Route  exact path ="/Biography" component= {Biography} className="wildth" />
      <Route  exact path ="/Contacts" component= {Contacts}  className="wildth" />
      <Route  exact path ="/Help" component= {Help} className="wildth" />
      <Route  exact path ="/Rooms/:id" component= {Rooms}  className="wildth"/>
      <Route  exact path ="/SingleRoom/:slug" component= {SingleRoom}  className="wildth" />
      <Route   component= {Default}  className="wildth" />

      </Switch>
     
      
     {/* end common bar for all pages */} 
   
      {/* common footer for all pages */} 
     <Footer  className="wildth" />
     {/* end common footer for all pages */} 


    </div>
</>
  );
}

export default App;

