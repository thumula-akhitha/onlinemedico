import React, { Component } from 'react';
export const DataContext = React.createContext();
export class DataProvider extends Component{
    state={            
        cart: [],
        total: 0,
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
    
    
     addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
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
        const {products,cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
