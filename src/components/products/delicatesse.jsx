import React from "react"
import Singledelicatesse from "./singledelicatesse";
//import axios from 'axios';
import {Grid} from '@material-ui/core';
import { Link } from "react-router-dom";
import delicatesseService from "../../services/DelicatesseService";


const Delicatesse = () => {
    const [delicatesse, setDelicatesse] = React.useState([
      ]);

      const getData = () => {
        delicatesseService
          .getdelicatesse()
          .then((data) => {
            setDelicatesse(data);
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
        <Grid container spacing={3} color="pink">
       
            <Grid item xs={12}>
            <h1 className="head">
            DELICATESSE
            </h1>
            <Link  className="head" to="/newdelicatesse" color="inherit">ADD NEW PRODUCT</Link>
            </Grid> 
        </Grid> 
        <br/><br/>
        <hr/><hr/>

        { delicatesse.length==0? <p  className="head">THERE ARE NO PRODUCTS!!</p>: 
        <Grid container spacing={10} >
            {delicatesse.map((delicatesse, index) => (
            <Singledelicatesse key={index} delicatesse={delicatesse} onDelete={getData}/>
          ))}
        </Grid> }
       
    
    </div> );
}
 
export default Delicatesse;