import React, { useState } from "react";
import {
  ThemeProvider,
  Grid,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import "./LinearStepper.css";
import { Paper, Box } from "@material-ui/core";
import { theme } from "./theme";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';

function getSteps() {
  return [
    "Mis Datos",
    "Pago",
  ];
}


function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <FirstStep/>       
        </>
      );

    case 1:
      return (
        <>
          <SecondStep/> 
        </>
      );
    case 2:
      return (
        <>
        </>
      );
    default:
      return "unknown step";
  }
}


const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Stepper alternativeLabel activeStep={activeStep} style={{ backgroundColor: "transparent"}} color="primary">
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >                
              </Typography>
            );
          }
          return (
            <Step {...stepProps} key={index} >
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container justify="center" alignItems="center" direction="column">
      <Paper component={Box} p={7} m={5} className="myPaper">
      
        {activeStep === steps.length ? (
        <Typography  align="center">
          <ThirdStep/>
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          {isStepOptional(activeStep) && (<Button
            className="mybutton mybutton1" 
            disabled={activeStep === 0}
            onClick={handleBack}
            color="primary"
            variant="outlined"
          >
            <ArrowBackIcon/>Anterior
          </Button>
          )}          
          <Button 
            className="mybutton mybutton2"            
            color="primary"
            variant="outlined"
            onClick={handleNext}
            style={{ float:"right"}}
          >
            {activeStep === steps.length - 1 ? "Pagar" : "Continuar"}
            <ArrowForwardIcon/>
          </Button>
        </>
      )}
      </Paper>
      </Grid>
      </ThemeProvider>
    </div>
  );
};



export default LinearStepper;
