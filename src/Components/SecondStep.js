import React from 'react'
import Card from '@material-ui/core/Card';
import {Grid} from "@material-ui/core";

export default function SecondStep() {
    return (
        <div>
          <Grid container justify="center" alignItems="center" direction="column">
          <h1>Pago del producto</h1>
          <p>Una vez efectuado el pago del producto, recibirás un email con los detalles de la compro.</p>
          <Card className="mycard" variant="outlined" p="5">
          <Grid container  alignItems="center" direction="column">
          <img src='/img/01.PNG'/>
          <h1>Tarjeta de crédito</h1>
          <p>Se redirigerá a una plataforma de pago. Se trata de un proceso seguro. Puede que la validación del pago tarde 24 horas en completarse.</p>
          <img src='/img/02.PNG'/>
          </Grid>
          </Card>
          </Grid>
          </div>
    )
}
