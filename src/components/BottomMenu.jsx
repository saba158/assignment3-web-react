import React from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const BottomMenu  = () => {
    return ( 
        <div>
                           
                  <div className="end">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 center col-sm-3 ">
                        <Button class="btn default but-block h-btn" href="/contactus"  color="primary">CONTACT US</Button> <br />
                        
                         
                        </div>
                        <div className="col-xs-12 center col-sm-3 ">
                        <Button class="btn default but-block h-btn" href="/aboutus"  color="primary"> ABOUT US</Button> <br />
                        
                        </div>
                        <div className="col-xs-12 center col-sm-3 ">
                        <Button class="btn default but-block h-btn" href="/sizechart"  color="primary"> SIZE CHART</Button> <br />
                       
                       
                        </div>
                        <div className="col-xs-12 center col-sm-3 ">
                        <Button class="btn default but-block h-btn" href="/connectwithus"  color="primary">CUSTOMER SERVICE</Button> <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />                <hr/> <hr/>
                  <div className="end1">
                    <p className="endbar">
                  <br />
                      1 East 1st Street, New York NY, 12345
                    </p>
                  </div>
               
        </div>

     );
}
 
export default BottomMenu;