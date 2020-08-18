import React from 'react';
import './index.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
//import "bootstrap/dist/css/bootstrap.css";
//import "font-awesome/css/font-awesome.css";
import TopMenu from './components/TopMenu';
import LandingPage from './components/landingpage';
import delicatesse from './components/products/delicatesse';
import eveningwear from './components/products/eveningwear';
import lookbook from './components/products/lookbook';
import ourstory from './components/products/ourstory';
import './index.css';
import BottomMenu from './components/BottomMenu';
import notfound from './components/products/notfound';
import Newd from './components/products/Newd';
import Newe from './components/products/Newe';
import Updatedelicatesse from './components/products/Updatedelicatesse';
import Updateeveningwear from './components/products/Updateeveningwear';
import Connectwithus from './components/products/connectwithus';
import aboutus from './components/products/aboutus';
import contactus from './components/products/contactus';
import sc from './components/products/sizechart';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
    <div>
        <switch >
        <ToastContainer />
        <TopMenu />
        <Route path= "/contactus" exact component={contactus} /> 
        <Route path= "/sizechart" exact component={sc} /> 
        <Route path= "/aboutus" exact component={aboutus} /> 
        <Route path= "/Connectwithus" exact component={Connectwithus} /> 
        <Route path= "/login" exact component={Login} /> 
        <Route path= "/register" exact  component={Register} />
        <Route path= "/Updateeveningwear/:id"  component={Updateeveningwear} />
        <Route path= "/neweveningwear"  component={Newe} />
        <Route path= "/Updatedelicatesse/:id"  component={Updatedelicatesse} />
        <Route path= "/newdelicatesse"  component={Newd} />
        <Route path= "/eveningwear" component={eveningwear} />
        <Route path= "/lookbook"  component={lookbook} />
        <Route path= "/ourstory"  component={ourstory} />
        <Route path="/notfound" component={notfound} />
        <Route path= "/delicatesse" component={delicatesse} />
        <Route path= "/"exact  component={LandingPage} />
        
        <BottomMenu />
        
        </switch>

        
         


    </div>

    </Router>
  );
}

export default App;
