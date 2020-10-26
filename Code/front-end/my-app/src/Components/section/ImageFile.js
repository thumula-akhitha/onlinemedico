import React, { Component } from "react";
import axios from "axios";
import "../css/ImageFile.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class ImageFile extends Component {
  state = {
    selectedFile: null,
    FileName: null,
  };
  fileSelectHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      FileName: event.target.files[0].name,
    });
  };
   
fileuploader=()=>{
   
    let request = {
      email: document.getElementById("exampleInputEmail1").value,
      dob: document.getElementById("dob").value,
      fullname: document.getElementById("examplename").value,
    };
    //console.log(fullname);
    let k = document.getElementById("exampleInputEmail1").value;
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("name1", k);
    // data.append("date",k1)
    axios
      .post("http://127.0.0.1:3333/onlinemedico/uploadPrescription", data, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "Upload Progress: " +
              (progressEvent.loaded / progressEvent.total) * 100 +
              "%"
          );
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("error occurred"));
    NotificationManager.success(
      "we have received your prescription",
      "you will get an message from us regarding accepting of your prescription",
      8000
    );
      setTimeout(()=>{
        document.getElementById('exampleInputEmail1').value = " ",
        document.getElementById('dob').value = " "
        document.getElementById('examplename').value=" "
    },1000);
  };
  render() {
    let uploadbutton = null;      
    if (this.state.selectedFile) {
        console.log('please enter all values')
        uploadbutton = <button className="btn up-btn FileLabel" onClick={() => { this.fileuploader() }}>upload</button>
    }
    return (
      <div>
        
          <div className="image-div">
            <input
              className="image-text form-control form-control-lg"
              type="text"
              value={this.state.FileName || ""}
              placeholder="prescription.png"
            />
            <input
              type="file"
              style={{ display: "none" }}
              key=""
              onChange={this.fileSelectHandler}
              ref={(fileInput) => (this.fileInput = fileInput)}
            />
            <button
              className="up-btn btn"
              onClick={() => this.fileInput.click()}
            >
              Select A File
            </button>
            <div className="FileLabel">
              <div>
                <label className="image-label">Enter Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div>
                <label className="image-label">Enter FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="examplename"
                  aria-describedby="Fullname"
                  placeholder="Enter FullName"
                  required
                />
              </div>
              <div className="form-group">
                <label className="image-label">DOB</label>
                <input
                  type="date"
                  name="bday"
                  max="3000-12-31"
                  id="dob"
                  min="1000-01-01"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="upload-btn">
                    {uploadbutton}
                </div>
            <NotificationContainer />
          </div>
        
      </div>
    );
  }
}

export default ImageFile;
