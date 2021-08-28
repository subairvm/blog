import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Post from './Post';
import About from './About';
import Navbar from './Layout/Navbar';
import './index.css'


const App = () => {
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path ="/about" component={About}/>
      <Route path ="/contact" component={Contact}/>
      <Route path ="/post" component={Post}/>
    </Switch>
  
  </>
   )
  }
  export default App;
