import React, { Component } from 'react';
import axios from 'axios';
import "./DropDown.css";
import Header from '../Header';
import Footer from '../Footer';
import ImageFile from './ImageFile';

class SelectDropDown extends Component {
    state = {
        up:false,
        ac:false
    }
    FileUploader = () =>{
        this.setState({
            up:true
        })
        
    }
    

    render() {
        return (
            <div>          
               <div className="btn-group drop-btn">
                    <label>Enter your Prescription Details:</label>
                    <button className="dp-button" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Click Me<span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={this.FileUploader}>upload prescription</a>
                    </div>
                    
                </div>

                <div className="DropImageFile">
                        {this.state.up ? <ImageFile/> : null}
                    </div>

                    <div>
                    
                </div>
            </div>
        )
    }
}


export default SelectDropDown;