import React, { Component } from 'react';
import "../css/DropDown.css";
import ImageFile from '../section/ImageFile';

class SelectDropDown extends Component {
    state = {
        up: false,
        ac: false
    }
    FileUploader = () => {
        console.log("welcome")
        this.setState({
            up: true
        })

    }


    render() {
        return (
            <div>

                <div id="dropdown">
                    <button onClick={this.FileUploader} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Click to upload prescription
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" >uploadPrescription</a>
                        <a class="dropdown-item">Already have a prescription</a>
                    </div>
                </div>

                <div className="DropImageFile">
                    {this.state.up ? <ImageFile /> : null}
                </div>

                <div>

                </div>
            </div>
        )
    }
}


export default SelectDropDown;