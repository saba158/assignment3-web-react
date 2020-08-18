import React from 'react';
import {Grid} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import axios from 'axios';
import { toast } from 'react-toastify';
import eveningwearService from '../../services/EveningwearService';

const Newe = (props) => {

    const [name, setname] = React.useState("") 
    const [price, setprice] = React.useState(0) 
    const [productdetails, setproductdetails] = React.useState("") 
    const [color, setcolor] = React.useState("") 
    const [fabric, setfabric] = React.useState("") 


    return ( <Grid container spacing={3}>
        <Grid item xs={12} >
        <h1  className="head">ADD NEW EVENING WEAR PRODUCT</h1>
        </Grid>

        <Grid item xs={3}> 
        </Grid>
        <Grid item xs={6}> 
        <TextField id="standard-basic"  label="Name" fullWidth value={name} 
        onChange= {(e) => {setname(e.target.value) } }/>
        <TextField id="standard-basic" label="Price" fullWidth value={price} 
          onChange= {(e) => {setprice(e.target.value) } }/>
        <TextField id="standard-basic" label="Product Details" fullWidth value={productdetails} 
        onChange= {(e) => {setproductdetails(e.target.value) }}/>
        <TextField id="standard-basic" label="Color" fullWidth value={color} 
        onChange= {(e) => {setcolor(e.target.value) }}/>
        <TextField id="standard-basic" label="Fabric" fullWidth value={fabric} 
        onChange= {(e) => {setfabric(e.target.value) }}/>
        </Grid>
        <Grid item xs={3}> </Grid>

  
        <Grid item xs={12}> </Grid>
        <Button class="btn default but-block h-btn" variant="contained"  color="primary" 
        onClick={ e=> { console.log("send api call to add")
        
        eveningwearService.addeveningwear
        ( {name, price, productdetails, color, fabric})
        .then(data => {
            console.log(data);
            props.history.push("/eveningwear");
        }).catch((err) => {
            console.log(err);  
            toast.error(err.response.data, {
                position: toast.POSITION.TOP_CENTER
              });
        })
        }}> 
        Add Button
        </Button>
      

       

    </Grid>);
}
 
export default Newe;