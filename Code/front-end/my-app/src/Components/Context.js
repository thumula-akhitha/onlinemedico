import React, { Component } from 'react';
import { v1 as uuidv } from "uuid";
export const DataContext = React.createContext();
export class DataProvider extends Component{
    constructor() {
        super();
        this.state = {
            id: uuidv(),
            canedit: false,
            addr: {
                firstname: "",
                mobile: "",
                address1: "",
                address2: "",
                state: "",
                zip: ""
            },
            cart: [],
        total: 0,
        addresses: [
            {
                id: '123',
                newAddress: {
                    firstname: 'John',
                    mobile: '9898989898',
                    address1: '1121 N College Dr',
                    address2: 'Apt L',
                    state: 'Maryville',
                    zip: '64468'
                }
            },
            {
                id: '234',
                newAddress: {
                    firstname: 'Kevin',
                    mobile: '0000000000',
                    address1: '8445 Walbrook Dr ',
                    address2: 'Apt M',
                    state: 'TN',
                    zip: '37923'
                }
            }
        ],
        selectedAddress:{},
            products:[
                {   id:'1',
                    title:'paracetamol',
                    price:'4.99',
                    src:'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
                    description:'Fever and bodypains',
                    count: 1
                },
                {
                    id:'2',
                    title:'nytQuill',
                    price:'11.99',
                    src:"https://cdn.shopify.com/s/files/1/0086/7821/1642/products/IMG_1449_480x480.jpg?v=1580943657",
                    description:"Fever and bodypains",
                    count: 1,
                },
                {
                    id:'3',
                    title:'paracetamol',
                    price:'4.99',
                    src:'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
                    description:'Fever and bodypains',
                    count: 1,
                },
                {
                    id:'4',
                    title:'nytQuill',
                    price:'11.99',
                    src:'https://cdn.shopify.com/s/files/1/0086/7821/1642/products/IMG_1449_480x480.jpg?v=1580943657',
                    description:'Fever and bodypains',
                    count: 1,
                },
                {
                    id:'5',
                    title:'nytQuill',
                    price:'11.99',
                    src:'https://cdn.shopify.com/s/files/1/0086/7821/1642/products/IMG_1449_480x480.jpg?v=1580943657',
                    description:'Fever and bodypains',
                    count: 1,
                },
                {
                    id:'6',
                    title:'paracetamol',
                    price:'4.99',
                    src:'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
                    description:'Fever and bodypains',
                    count: 1,
                },
                {
                    id:'7',
                    title:'paracetamol',
                    price:'4.99',
                    src:'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
                    description:'Fever and bodypains',
                    count: 1,
                },
                {
                    id:'8',
                    title:'nytQuill',
                    price:'11.99',
                    src:"https://cdn.shopify.com/s/files/1/0086/7821/1642/products/IMG_1449_480x480.jpg?v=1580943657",
                    description:"Fever and bodypains",
                    count: 1,
                },
                {
                    id:'9',
                    title:'paracetamol',
                    price:'4.99',
                    src:'https://cdn.shopify.com/s/files/1/1346/8165/products/1129154_1400x.jpg?v=1575891053',
                    description:'Fever and bodypains',
                    count: 1
                },
                
            ],
            
        }
        this.handleChangeAddress = this.handleChangeAddress.bind(this);

    }
    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart.")
        }
    };
    handleChangeAddress = (e) => {
        const { addr } = this.state;
        console.log(e.target.name, e.target.value);
        const value = e.target.value;
        // setAddr({ ...addr, [e.target.name]: value });
        this.setState({
            addr: { ...addr, [e.target.name]: value }

        })
        console.log(addr);
    };
    handleSelectAddress=(sid)=>{
        const {addresses,selectedAddress}=this.state;
        const selectedAddr=addresses.find(addr=>addr.id===sid);
     //   console.log(selectedAddr);
        this.setState({selectedAddress:selectedAddr});
console.log(selectedAddress);
    }
    addAddress = () => {
        const { addresses, id, addr, canedit } = this.state;
        const newaddr = {
            id: id,
            newAddress: addr

        };
        console.log(newaddr);

        if (newaddr != null) {

            // const fa1 = this.addresses;
            // fa1.push(firstaddress);  
            // this.setState({addresses:fa1}); 
            this.setState({ addresses: [...addresses, newaddr], canedit: false });

            // this.setState({canedit:false});
            this.setState({addr:{
                ...addr,
                firstname: "",
                mobile: "",
                address1: "",
                address2: "",
                state: "",
                zip: ""
           
            }})

        }
    };
    editAddress = (editingId) => {

        const { addr, canedit, addresses ,id} = this.state;
        console.log(editingId)
        const filteredAddress = addresses.filter((item) => item.id !== editingId);       
        this.setState({ addresses: filteredAddress});
        //this.setState({id:id1})
        const editingItem = addresses.find(address => address.id === editingId );
        this.setState({ id: [...id,editingId ]});
        // console.log(editingItem.newAddress);
       // console.log(filteredAddress);
        //console.log(editingItem);
        this.setState({
            addr: {
                ...addr,
                firstname: editingItem.newAddress.firstname,
                mobile: editingItem.newAddress.mobile,
                address1: editingItem.newAddress.address1,
                address2: editingItem.newAddress.address2,
                state: editingItem.newAddress.state,
                zip: editingItem.newAddress.zip
            }
        });
        this.setState({ canedit: true });


    };
    deleteAddress = (id) => {
        console.log(id);
        const { addresses } = this.state;
        const deletingAddress = addresses.filter((item) => item.id !== id);
        this.setState({ addresses: deletingAddress });
    };
    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        console.log(id)
        cart.forEach(item =>{
            console.log(item.id)
            if(item.id === id){
                console.log(parseInt(item.count))    
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){           
            const {cart} = this.state;
            console.log(id)
            cart.forEach((item, index) =>{
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products,cart,total,addresses, addr, id, canedit,selectedAddress} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,addAddress, deleteAddress, editAddress, handleChangeAddress ,handleSelectAddress} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,
                addAddress, addresses, deleteAddress, editAddress, addr, id, canedit, handleChangeAddress,handleSelectAddress,selectedAddress}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
