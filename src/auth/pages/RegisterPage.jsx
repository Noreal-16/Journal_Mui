import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import React from "react";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}} >
              <TextField
                label="Nombre Completo"
                type="text"
                placeholdel="Juan Perez"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}} >
              <TextField
                label="Correo"
                type="email"
                placeholdel="correo@correo.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt:1}}>
              <TextField
                label="Contrasenia"
                type="password"
                placeholdel="**********"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item  sm={6}>
                <Button variant="contained" fullWidth>
                  Register
                </Button>
              </Grid>

            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}} >Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>Ingresar</Link>
              </Grid>
          </Grid>
        </form>
    </AuthLayout>
  );
};
