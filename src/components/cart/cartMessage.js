import React from "react";
import Part from '../part/part';
import './cart.css';
import {Link} from 'react-router-dom';

const CartMessage = (props) => {
   
    return (
        <div className="cartMessageContainer top">
            <span>Part added to the cart</span>     
        </div>
    );
};

export default CartMessage;