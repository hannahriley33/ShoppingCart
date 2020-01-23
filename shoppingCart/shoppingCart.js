import renderCartItems from './render-line-items.js';
import { findById } from '../common/utils.js';
import carList from '../data/cars.js';
import cart from '../data/cart.js';



const tbody = document.querySelector('tbody');
;


for (let i = 0; i < cart.length; i++) {
    console.log('hi');
    const cartLineItem = cart[i];
    console.log(carList);
    console.log(cartLineItem.id);
    const carInCart = findById(cartLineItem.id, carList);
    console.log(carInCart);
    const putThisInCartDom = renderCartItems(cartLineItem, carInCart);

    console.log(carInCart);
    console.log(putThisInCartDom);

    tbody.appendChild(putThisInCartDom);
    
}