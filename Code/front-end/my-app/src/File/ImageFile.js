import React, { Component } from 'react';
import axios from 'axios';
import './ImageFile.css';

class ImageFile extends Component {
    state = {
        selectedFile: null,
        FileName: null,    
    }
    fileSelectHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            FileName: event.target.files[0].name,            
        })
    }
    fileuploader = () => {
        const config = {
            headers : {
                'Content-Type':'multipart/form-data'
          }

        }
        console.log(document.getElementById('exampleInputEmail1').value)
        console.log(document.getElementById('dob').value)
        let request = {
            email: document.getElementById('exampleInputEmail1').value,
            dob: document.getElementById('dob').value
        }
        const data = new FormData();
        //data.append('name', this.state.selectedFile.name);
        data.append("file",this.state.selectedFile)
        data.append("email",document.getElementById('exampleInputEmail1').value)
        data.append("dob",document.getElementById('dob').value)

        console.log(this.state.FileName,this.state.selectedFile)
        axios.post('http://127.0.0.1:3333/onlinemedico/image-file', data, config,
            {
                onUploadProgress: progressEvent => {
                    console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%');
                }
            })
            .then(res => {
                console.log(res);
            }).catch(err=> console.log("error occurred"))
    }
    render() {
        let uploadbutton = null;      
        if (this.state.selectedFile) {
            console.log('please enter all values')
            uploadbutton = <button className="btn btn-outline-primary FileLabel" onClick={() => { this.fileuploader() }}>upload</button>
        }
        return (
            
            <div className="image-div">
                <input className="image-text form-control form-control-lg" type="text" value={this.state.FileName || ''} placeholder="example.png" />
                <input type="file" style={{ display: "none" }} key="" onChange={this.fileSelectHandler} ref={fileInput => this.fileInput = fileInput} />
                <button className="select-btn btn btn-primary" onClick={() => this.fileInput.click()}>Select A File</button>
                
                <div className="FileLabel">
                <div>
                    <label className="image-label">Enter FullName</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label className="image-label">DOB</label>
                    <input type="date" name="bday" max="3000-12-31"
                        id="dob" min="1000-01-01" className="form-control" required/>
                    </div>
                </div>
                <div className="upload-btn">
                    {uploadbutton}
                </div>
                </div>
                


                        
        )


    }
}


export default ImageFile;