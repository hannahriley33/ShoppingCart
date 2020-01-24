import renderCartItems from './render-line-items.js';
import { findById } from '../common/utils.js';
import carList from '../data/cars.js';
import cart from '../data/cart.js';
import { calcOrderTotal } from '../common/utils.js';



const tbody = document.querySelector('tbody');
const orderTotalTd = document.getElementById('order-total');
const placeOrderButton = document.getElementById('placeOrderButton');

const json = localStorage.getItem('shoppingCart');
let shoppingCart;
if (json) {
    shoppingCart = JSON.parse(json);


} else {
    cart = [];
    
};


for (let i = 0; i < cart.length; i++) {
    
    const cartLineItem = cart[i];
    
    const carInCart = findById(carList, cartLineItem.id);
    
    const putThisInCartDom = renderCartItems(cartLineItem, carInCart);

    tbody.appendChild(putThisInCartDom);
    
}

const finalOrderTotal = calcOrderTotal(carList, cart);
orderTotalTd.textContent = finalOrderTotal;

if (shoppingCart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        // alert('Order placed ')
        localStorage.removeItem('shoppingCart');
        window.location = '../index.html';
    })
};
