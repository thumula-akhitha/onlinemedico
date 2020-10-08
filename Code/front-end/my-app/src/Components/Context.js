import React, { Component } from 'react';
import { v1 as uuidv } from "uuid";
export const DataContext = React.createContext();
export class DataProvider extends Component{
    constructor() {
        super();
        this.state = {
            id: uuidv(),
            name : "admin",
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
        //     {   id:'1',
        //     title:'paracetamol',
        //     price:'4.99',
        //     src:'https://i.dailymail.co.uk/1s/2020/08/03/13/31507884-0-image-a-18_1596458510405.jpg',
        //     description:'Fever and bodypains',
        //     count: 1
        // }
            // {   id:'11',
            //     title:'paracetamol',
            //     price:'4.99',
            //     src:'https://i.dailymail.co.uk/1s/2020/08/03/13/31507884-0-image-a-18_1596458510405.jpg',
            //     description:'Fever and bodypains',
            //     count: 1
            // },
            // {
            //     id:'12',
            //     title:'nytQuill',
            //     price:'11.99',
            //     src:"https://coupons.hunt4freebies.com/wp-content/uploads/2017/12/DayQuil-NyQuil.png",
            //     description:"Fever and bodypains",
            //     count: 1,
            // },
            // {
            //     id:'13',
            //     title:'Cetirizine',
            //     price:'4.99',
            //     src:"https://content.jdmagicbox.com/quickquotes/images_main/cetirizine-dihydrochloride-tablets-ip-10mg-347254771-dnps5.jpg",
            //     description:'fever,allergy symptoms',
            //     count: 1,
            // },
            // {
            //     id:'14',
            //     title:'Meftal',
            //     price:'11.99',
            //     src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROD1ZbcFjU9mwn5q1YpcXIYb3E59W-9HNBfg&usqp=CAU',
            //     description:'To treat of abdominal pain',
            //     count: 1,
            // },
            // {
            //     id:'15',
            //     title:'Equaline',
            //     price:'11.99',
            //     src:'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00041163488403/0105747a6381ae2fc1c6f294baffca9c_large.png&width=512&type=webp&quality=40',
            //     description:'Headache Reliever',
            //     count: 1,
            // },
            // {
            //     id:'16',
            //     title:'Migraine',
            //     price:'4.99',
            //     src:'https://www.dollargeneral.com/media/catalog/product/cache/6e5ff7de2a46bb5e4325e62839d28016/d/g/dghl_migraine_relief_50ct_2.jpg',
            //     description:'Migraine Reliever',
            //     count: 1,
            // },
            // {
            //     id:'17',
            //     title:'Koflet',
            //     price:'4.99',
            //     src:'https://www.dowa.co/content/images/thumbs/0005440_koflet-syrup-200-ml_600.jpeg',
            //     description:'Cough Syrup',
            //     count: 1,
            // },
            // {
            //     id:'18',
            //     title:'Panado',
            //     price:'11.99',
            //     src:"https://cdn-prd-02.pnp.co.za/sys-master/images/h58/he0/9268395573278/silo-6009695584769-front-317817_400Wx400H",
            //     description:"rapid pain,fever reliever",
            //     count: 1,
            // },
            
            
        ],
            
        }
        this.handleChangeAddress = this.handleChangeAddress.bind(this);

    }
    addCart = (id) => {
        alert("Product is added to cart")
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
    addProduct = (k) => {
        console.log("context add product page")
        console.log(k);
        this.setState({
            //products:[...this.state.products,...k]
            products:k
        })
    };
    addName = (k) => {
        console.log("context add name page")
        console.log(k);
        this.setState({
            name:k
        })
        console.log(this.state.name)
    };
    updateProducts = (k) => {
        this.setState({
            products: [...this.state.products, k]
          })
    }
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
      //  localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
       // localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        // const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        // if(dataCart !== null){
        //     this.setState({cart: dataCart});
        // }
        // const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        // if(dataTotal !== null){
        //     this.setState({total: dataTotal});
        // }
    }
   

    render() {
        const {products,cart,total,addresses, addr, id, canedit,selectedAddress,name} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,addAddress, deleteAddress, editAddress, handleChangeAddress ,handleSelectAddress,addProduct,updateProducts,addName} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,name,
                addAddress, addresses, deleteAddress, editAddress, addr, id, canedit, handleChangeAddress,handleSelectAddress,selectedAddress,addProduct,updateProducts,addName}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
