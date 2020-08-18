import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import eveningwearService from "../../services/EveningwearService";
import userService from "../../services/UserService";

const Singleeveningwear = (props) => {
  const { eveningwear, onDelete, history } = props;
  console.log(props);

  return (
    <Grid item xs={6}>
      <h2>{eveningwear.name}</h2>
      <p>
        {eveningwear.price} <br />
        {eveningwear.productdetails} <br />
        {eveningwear.color} <br />
        {eveningwear.fabric} <br />
      </p>
      <Grid item xs={9}>
      {userService.isAdmin() && 
     <>
        <Button
          class="btn default but-block h-btn"
          variant="contained"
          color="primary"
          onClick={(e) => {
            // console.log("navigate to update");
            console.log(eveningwear);
            history.push("/Updateeveningwear/" + eveningwear._id);
          }}
        >
          EDIT
        </Button>
        </> }
      </Grid>
      <Grid item xs={9}>
      {userService.isAdmin() && 
     <>
        <Button
          class="btn default but-block h-btn"
          variant="contained"
          color="secondary"
          onClick={(e) => {
            eveningwearService
              .deleteeveningwear(eveningwear._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          DELETE
        </Button>
        </> }
      </Grid>

      <hr />
    </Grid>
  );
};

export default withRouter(Singleeveningwear);
