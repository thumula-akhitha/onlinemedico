import React, {useEffect } from 'react';
import { Card } from 'react-bootstrap';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import '../css/Tracking.css';

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

    
    useEffect(()=>{
        console.log('track',props.trackingArray.status)
        if(props.trackingArray.status==='delivered'){
            setActiveStep(2);
        }
        else if(props.trackingArray.status==='pending'){
            setActiveStep(1);
        }
        else{
            setActiveStep(0);
        }
    }
    )
    return (
        track.map((card, index) => (
            <Card className='trackcard'>
                <Card.Header className='header' as="h5">Order Tracking :
         {/* {props.trackingArray.map(orderedNo => { return (`${orderedNo.orderId}`) }
                )} */}
                </Card.Header>
                <Card.Title className='titleTrack'>
                    <div className='row'>
                        <div className={'col '
                            + 'shop'}>
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
                <Card.Text className='trackOrder'>
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
                                <p className='instructions'>All steps completed</p>
                               
                            </div>
                        ) : (
                                <div>
                                    <Typography className='instructions'>{getStepContent(activeStep)}</Typography>
                                    <div>
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