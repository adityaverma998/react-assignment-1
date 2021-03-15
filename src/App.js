import React from 'react';
import Dashboad from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';

import {BrowserRouter as Router, Route} from "react-router-dom"

class App extends React.Component{
  render(){
    return (
    <Router>
    <Header/>
    <Dashboad/>
    <Footer/>
    </Router>
  
    )
   
  }
}
export default App;
