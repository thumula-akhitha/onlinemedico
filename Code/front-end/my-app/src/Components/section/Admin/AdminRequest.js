import React, { Component} from 'react';
import axios from 'axios';
import '../../css/AdminRequest.css';

class AdminRequest extends Component {
    state={
        review : []
    }
      componentDidMount(){
        axios.get(`http://127.0.0.1:3333/onlinemedico/contactReview`)
        .then(res=>{
        console.log(res);
        console.log(res.data);
        this.setState({review: res.data})
    }) 
        
      }
    render() {
        const {review} = this.state;
            return (            
               <div className="adminrequestdiv">
                   {review.map(r =>
                   <div className="row requestrow">
                   <p className="reqp col-6">FirstName:</p> 
                   <span className="col-6">{r.firstName}</span>                  
                   <p className="reqp col-6">LastName: </p> 
                   <span className=" col-6">{r.lastName}</span>                                
                   <p className="reqp col-6">Email ID:</p>  
                   <span className="col-6">{r.emailId}</span>                                  
                   <p className="reqp col-6">User Comment:</p>  
                   <span className="col-6">{r.comment}</span>     
                   <p className="reqp col-6">Time of Request:</p>  
                   <span className="col-6">{r.time}</span>        
                   </div>
                    )}
                   
               </div>
            )
    }

}
export default AdminRequest