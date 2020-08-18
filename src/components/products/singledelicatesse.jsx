import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import delicatesseService from "../../services/DelicatesseService";
import userService from "../../services/UserService";

const Singledelicatesse = (props) => {
  const { delicatesse, onDelete, history } = props;
  console.log(props);

  return (
    <Grid item xs={6}>
      <h2>{delicatesse.name}</h2>
      <p>
        {delicatesse.price} <br />
        {delicatesse.productdetails} <br />
        {delicatesse.color} <br />
        {delicatesse.fabric} <br />
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
            console.log(delicatesse);
            history.push("/Updatedelicatesse/" + delicatesse._id);
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
            delicatesseService
              .deletedelicatesse(delicatesse._id)
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

export default withRouter(Singledelicatesse);
