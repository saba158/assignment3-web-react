import React from "react"
import Singleeveningwear from "./singleeveningwear";
//import axios from 'axios';
import {Grid} from '@material-ui/core';
import { Link } from "react-router-dom";
import eveningwearService from "../../services/EveningwearService";


const Eveningwear = () => {
    const [eveningwear, setEveningwear] = React.useState([
      ]);

      const getData = () => {
        eveningwearService
          .geteveningwear()
          .then((data) => {
            setEveningwear(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      //getData();
      React.useEffect(getData, []);


      console.log("inside products component");
    return ( 
    <div>

       
<hr/><hr/>
        <Grid container spacing={3}>
      
            <Grid item xs={12}  className="head">
            <h1 className="head">
            EVENING WEAR
            </h1>
            <Link  className="head" to="/neweveningwear">ADD NEW PRODUCT</Link>
            </Grid> 
        </Grid> 
        <br/><br/>
        <hr/><hr/>   

        { eveningwear.length==0? <p className="head">THERE ARE NO PRODUCTS!!</p>: 
        <Grid container spacing={10} >
            {eveningwear.map((eveningwear, index) => (
            <Singleeveningwear key={index} eveningwear={eveningwear} onDelete={getData}/>
          ))}
        </Grid> }
       
    
    </div> );
}
 
export default Eveningwear;