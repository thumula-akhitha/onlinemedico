import React, {useState } from 'react';
import { Card } from 'react-bootstrap';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './Modal';
import "../css/Return.css";;



const returnItem = (props) => {
    const [open, setOpen] = useState(false);
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }));
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = (e) => {
        e.preventDefault();
        setOpen(!open);
      };
   
const imgstyle={
    marginBottom: '3em',
    marginTop: '4em',
    width:'131px',
    height:'100px'
}
const titleStyle={
    marginTop: '6em',
    marginLeft: '8em'
}
    return (
        <div className='returnHead'>
        <p className='returnPara'>  If you are returning multiple items from one order, 
        you can avoid additional return fees by returning them together.</p>
        <Card className='returnItemHeader'>
            <Card.Text>
                <form>
                <div className='row'>
                    <div className='col'>
                    {props.returnArray.map(
                    returnimage => { return (<img style={imgstyle} src={returnimage.image}  />) }
                )}
                    </div>
                    <div className='col' style={titleStyle}>
                    {props.returnArray.map(returnItemName => `${returnItemName.title}`)}
                    </div>
                </div>
              
                <div className='row'>
                    <div className='col'>
                    <label>Please give reason for return</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='returnReason'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <label>Provide account details for refund</label>
                    </div>
                    <div className='col'>
                    <input type='text' className='refundDetails'  />
                    </div>
                </div>
                <button className='nextbtn'
                    onClick={handleToggle}>Confirm Return</button>
                    </form>
            </Card.Text>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Modal color="grey" />
      </Backdrop>
        </Card>
        </div>
    )

}
export default returnItem;