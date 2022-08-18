import React from "react";

class CartItem extends React.Component{
    constructor() {
        super();
        this.state= {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render() {
        const {price, title, qty} = this.state;
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt=""/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: '#777'}}>{price}</div>
                <div style={{color: '#777'}}>{qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1660811536~hmac=867ac4b38ebd0ad345d544efa5609481"/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1660811556~hmac=be2b0efb2a36b7eed08ab90b8f0ee13b"/>

                </div>

            </div>
        </div>
        );
    }
}

// camel case in js
// object created
// I can apply style using objects
const styles={
    image: {
        height:110,
        width:110,
        borderRadius: 4,
        background:'#ccc'
    }
}

export default CartItem