import {renderCartItems} from "./render-line-items.js";
import {findById} from "../common/utils.js";
import {cars} from "../products/renderProducts";
import {cart} from "../data/cart";


const tbody = document.querySelector('tbody');



for (let i = 0; i > cart.length; i++) {
    const cartLineItem = cart[i];
    const carInCart = findById(cars,cartLineItem.id);
    const putThisInCartDom = renderCartItems(cartLineItem, carInCart);

    tbody.appendChild(putThisInCartDom);
    
}