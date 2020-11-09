import React, { Component } from 'react'
import '../css/EditOrder.css';
import { DataContext } from '../Context';
import axios from 'axios';

const selectedImage = () => {
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
class EditOrder extends Component {
    static contextType = DataContext;
    state = {
        list: [
            {
                id: 1,
                label: <img style={imgStyle} src={tablet} />,
                value: false,
                count: 2

            },
            {
                id: 2,
                label: <img style={paraImageStyle} src={paracetomal} />,
                value: false,
                count: 3
            },
            {
                id: 3,
                label: <img style={panadolStyle} src={panadol} />,
                value: false,
                count: 2
            },
        ]
    };
   
    handleChange = e => {
        const id = e.target.id;
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => {
            return {
                list: prevState.list.map(
                    li => (li.id === +id ? {
                        ...li,
                        value: !li.value
                    } : li)
                )
            };
        });
    };
    handleCancel(){
        alert('Cancelled your order');
    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                list: prevState.list.filter(li => !li.value)
            };
        });
    };
    render() {
        const { increase, reduction, removeProduct, total } = this.context;
        return (
            <div className="App">
                {this.state.list.map(e => (
                    <div key={e.id}>
                        <input
                            type="checkbox"
                            id={e.id}
                            checked={e.value}
                            onChange={this.handleChange}
                        />
                        <label htmlFor={e.id}>{e.label}</label>
                        {/* <div className='amounts'>
                            <button className="count" onClick={() => reduction(e.id)}> - </button>
                            <span>{e.count}</span>
                            <button className="count" onClick={() => increase(e.id)}> + </button>
                        </div> */}

                    </div>

                ))}
                 {/* <h3>Total: ${Math.floor(total* 100) / 100}</h3> */}

                <button className='editbtn' onClick={this.handleClick}>EDIT</button>
                {/* <button className='cancelbtn' onClick={this.handleCancel}>CANCEL</button> */}
            </div>
        );
    }


}


export default EditOrder;