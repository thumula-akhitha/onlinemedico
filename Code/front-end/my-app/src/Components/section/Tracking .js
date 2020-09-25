import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from '../css/Tracking.css';

const getSteps = () => {
    const items = ['Order confirmed', 'In transit', 'Delivered']
    return items;
}
function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Order placed succesfully';
        case 1:
            return 'In transit will be arriving on time';
        case 2:
            return 'Parcel delivered';
        default:
            return 'Unknown stepIndex';
    }
}
const tracking = (props) => {
    // const classes = useStyles();

    const track = [
        {
            via: 'usps',
            status: 'In Transit',
            deliveryDate: '11 Nov 2020'
        }
    ]

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    //   const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        track.map((card, index) => (
            <Card className={classes.trackcard}>
                <Card.Header className={classes.header} as="h5">Order Tracking :
         {props.trackingArray.map(orderedNo => { return (`${orderedNo.orderId}`) }
                )}
                </Card.Header>
                <Card.Title className={classes.titleTrack}>
                    <div className='row'>
                        <div className={'col '
                            + classes.shop}>
                            <div className='row'>
                                <p>Shipped Via</p>
                            </div>
                            <div className='row'>
                                {card.via}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <p>Status : </p>
                            </div>
                            <div className='row'>
                                {card.status}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <p>Expected Delivery :</p>
                            </div>
                            <div className='row'>
                                {card.deliveryDate}
                            </div>
                        </div>
                    </div>
                </Card.Title>
                <Card.Text className={classes.trackOrder}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <p className={classes.instructions}>All steps completed</p>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                                <div>
                                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.backButton}
                                        >
                                            Back
              </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                    </div>
                </Card.Text>

            </Card>
        ))
    )
}


export default tracking;