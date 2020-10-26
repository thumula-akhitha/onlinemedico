import React, { Component } from 'react'
import '../css/EditOrder.css';


const editOrder = (props) => {

    const selectedImage=()=>{
        alert('Succesfully canceled your order')
      
    }
    const paracetomal = require('../images/paracetomal.jpg')
    const tablet = require('../images/tablet.jpg')
    const panadol = require('../images/panadol.jpg')
    const imgStyle = {
        marginBottom: '3em',
        marginTop: '4em',
        width: '192px',
        marginLeft: '6em',
        height: '126px'
    }
    const paraImageStyle = {
        width: '192px',
        marginLeft: '6em',
        height: '127px'
    }
    const panadolStyle = {
        width: '192px',
        marginLeft: '6em',
        height: '127px'

    }
    return (
        <div className='radioImages'>
            <div className='row'>
                <label className='radioTablet'>
                    <input type='radio' value='tablet' checked={true} />
                    <img style={imgStyle} src={tablet} />
                    <div className='productname'>
                        {props.returnArray.map(returnItemName => `${returnItemName.title}`)}
                    </div>
                </label>
            </div>
            <div className='row'>
                <label>
                    <input type='radio' value='paracetomal' />
                    <img style={paraImageStyle} src={paracetomal} />
                    <div className='secondproduct'>
                        <p>PARACETOMAL</p>
                    </div>
                </label>
            </div>
            <div className='row'>
                <label>
                    <input type='radio' value='panadol' />
                    <img style={panadolStyle} src={panadol} />
                    <div className='thirdproduct'>
                        <p>PANADOL</p>
                    </div>
                </label>
            </div>
            <div className='row'>
                <label>Please mention reason to cancel</label>
                <textarea className='cancelProduct' placeholder='Mention reason to cancel..' required>
                </textarea>
            </div>
            < button className='cancelbtn'
            onClick={selectedImage}
            >EDIT/CANCEL</button>

        </div>
    )

}

export default editOrder;