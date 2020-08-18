import React from "react"
import {Link} from "react-router-dom"
import userService from "../services/UserService";
import { TextField, Button } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
    display: "right",
  },
}));


const TopMenu  = () => {
    return ( 
        <div>

         


        <link rel="stylesheet" href="projectg.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <title>Font Awesome Icons</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./responsive.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <p className="head1" >
          Don't Forget: free shipping on orders over $100!!
        </p>
        <br /><br />

      <div class="divlogin"> 
      {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6" color="primary" class="btn default but-block h-btn">
              <Link to="/login" >
                Login
              </Link>
            </Typography>
            <Typography variant="h6" color="primary" class="btn default but-block h-btn">
              <Link to="/register" >
                Register
              </Link>
            </Typography>
          </>
        ) : (

         
          <Button
          class="btn default but-block h-btn-head1"
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut <br/> {userService.getLoggedInUser().name}
          </Button>
        )}
  
      </div>
       


        <div className="w3-sidebar w3-bar-block w3-card w3-animate-left">
          <button className="w3-bar-item w3-button w3-large" onclick="w3_close()">Close ×</button>
          <div className="sidebar">
            <a href="/register"> REGISTER</a>
            <a href="login"> LOG IN</a>
            <a href="#"> <i className="fas fa-search"> SEARCH</i></a>
            <a href="/"> Home</a>
            <a href="/delicatesse"> Delicatesse</a>
            <a href="eveningwear">Evening Wear</a>
            <a href="/lookbook"> Lookbooks</a>
            <a href="/aboutus"> ABOUT US</a>
            
          </div>
        </div>







        <div className="container-fluid">
          <div className="row n1">
            <div className="col-sm-4">
              <div className="co">
                <div className="w3-teal">
                  <button id="openNav" className="w3-button w3-teal w3-xlarge" onclick="w3_open()">☰</button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="col">
                <p className="p2">
                  <b> Evanna</b>
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="col1">
                
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <nav className="navbar">
          <ul className="nav navbar-nav  navbar-center">
            <li  className="nav item"><a href="/">HOME</a></li>
            <li  className="nav item"><a href="/delicatesse">DELICATESSE</a></li>
            <li  className="nav item"><a href="/eveningwear">EVENING WEAR</a></li>
            <li className="nav item"><a href="/lookbook">LOOKBOOKS</a></li>
            <li className="nav item"><a href="/aboutus">ABOUT US</a></li>
        
          </ul>
        </nav>
        <br /><br /><br />
        



        <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}

            
            <div className="carousel-inner">
              <div className="item active">
                <img className="img1" src="https://www.eliesaab.com/file/image/aGFuZGxlcj1maWxsJndpZHRoPTE1MDAmaGVpZ2h0PTc4MA==/eliesaab0149-1535450423.jpg" alt="" />
              </div>
              <div className="item">
                <img className="img1" src="https://images.squarespace-cdn.com/content/v1/5b9587851137a618f2770e60/1551905494388-02DRUDTF4E67752LJHA6/ke17ZwdGBToddI8pDm48kAG6Yh26fSXDlSuwebtfPZh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ucj4duweZqAaymtxTa6rjpkozRJ4ySCtbCT5wVj8BOSM7dsz4i27n53EfqFOh7KSRA/20170227-IMG_9957AGNESBLACKWEBUPLOADSStyledshootfebruary27th-ExposureAGNESBLACKWEBUPLOADSStyledshootfebruary27thAGNESBLACK.jpg?format=2500w" alt="
          " />
              </div>
              <div className="item">
                <img className="img1" src="https://www.eliesaab.com/file/image/aGFuZGxlcj1maWxsJndpZHRoPTE1MDAmaGVpZ2h0PTc4MA==/elie-saab-hc-ss20-greg-finck-151_1580203185.jpg" />
              </div>
            </div>
            {/* Left and right controls */}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>




      
      









        </div>

     );
}
 
export default TopMenu;