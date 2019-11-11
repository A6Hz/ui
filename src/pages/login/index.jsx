import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import img1 from "../../assets/images/01.jpg"
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';



class index extends Component {
  render() {
    return (
      <Grid container>
        <Grid item md={12} lg={6}>
          <img src={img1} alt="Yuruari" style={{
            width: "100%",
            height: "auto"
          }} />
        </Grid>
        <Grid item md={12} lg={6}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center" >
            <Grid item xs={12}>
              <h1>Administradora Yuruary C.A</h1>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item xs={10}>
                  <TextField label="With a grid" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item xs={10} >
                  <TextField label="Clave" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" style={{ width: "100%" }}>
                Primary
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default index;