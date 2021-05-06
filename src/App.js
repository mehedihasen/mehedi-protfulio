import Home from './Component/Home/Home';
import './App.css'
import React from "react";

// import "firebase/analytics"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Project from './Component/Project/Project';

import Footer from './Component/Footer/Footer';
import Nab from './Component/Nab/Nab';

function App() {
  return (
    <div className="color">
        
  <Router>
 <Route>
      <Nab></Nab>
  </Route>

 <Switch>

   <Route path="/about">
     <About />
   </Route>
   <Route path="/Project">
     <Project />
   </Route>
   <Route path="/Blog">
     <Blog />
   </Route>
    <Route path="/home">
    <Home></Home>
   </Route>
    <Route exact path="/">
    <Home></Home>
   </Route>
 </Switch>

 <Route>
   <Footer></Footer>
 </Route>
        
</Router>
    </div>
  );
}

export default App;
