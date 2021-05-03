import React from 'react'
import {TextField} from '@material-ui/core';
import {Grid} from "@material-ui/core";


export default function FirstStep() {
  return (
        <div>
        <h1>Mis Datos</h1>
          <p>Revisa los datos y completa aquellos pendientes antes de continuar con el proceso.</p>
          <Grid container justify="center" alignItems="center" direction="column">
          <TextField
            id="Nombre"
            label="Nombre"
            variant="outlined"
            placeholder="Nombre"

            margin="normal"
          />
          <TextField
            id="Apellidos"
            label="Apellidos"
            variant="outlined"
            placeholder="Apellidos"

            margin="normal"
          /> 
          </Grid>
          </div>
    )
}
