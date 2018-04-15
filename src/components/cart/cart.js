import React from "react";
import Part from '../part/part';
import './cart.css';
import {Link} from 'react-router-dom';
import emptyCart from '../../assets/images/cartEmpty.png'

const Cart = (props) => {

    let total = 0;
    let list = (<div className='emptyMessage'>
                    <img src={emptyCart}/>
                    <p>Your Shopping Cart is Empty</p>
                    <Link  className='button-link' to="/partResults">Keep Shopping</Link>
                </div>
                );
    let checkoutButton = <Link  onClick={e => e.preventDefault()} className='disabled' to={"/checkout"}>Proceed to checkout</Link>;

    if(props.cartParts.length > 0){
        list = props.cartParts.map(function(item,index){
            total += item.price_usd;
            return ( 
                <div key={index} className='cartPart'> 
                      <Part isCart={true} removePart={props.removePart} imageClass='imageCartContainer' infoClass='productCart' partInfo={item} filters={props.filters}/>  
                </div>
            )   
        }); 
        checkoutButton = <Link className='button-link' to={"/checkout"}>Proceed to checkout</Link>;
    }
    return (
        <div className="container">
            <Link  className='button-link' to={props.urlBack}>Go Back</Link>            
            <div className="cartPartsContainer">            
                <span>YOUR SHOPPING CART</span>
                {list}                
            </div>
            <div className='cartTotal'>
                <div className="cartTitle"><b>SUBTOTAL ({list.length} items)</b> ${total}</div>
                <div className="cartData">
                    <p>TAX: <span>$0.00</span></p>
                    <hr/>
                    <p>TOTAL:  <span>${total}</span></p>
                    <hr/>
                    {checkoutButton}
                </div>
            </div>
        </div>
    );
};

export default Cart