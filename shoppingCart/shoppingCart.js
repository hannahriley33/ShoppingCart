import renderCartItems from './render-line-items.js';
import { findById } from '../common/utils.js';
import carList from '../data/cars.js';
import cart from '../data/cart.js';
import { calcOrderTotal } from '../common/utils.js';



const tbody = document.querySelector('tbody');
const orderTotalTd = document.getElementById('order-total');
const placeOrderButton = document.getElementById('placeOrderButton');

const json = localStorage.getItem('SHOPPINGCART');
let shoppingCart;
if (json) {
    shoppingCart = JSON.parse(json);
console.log(shoppingCart)

} else {
    shoppingCart = [];
    
};


for (let i = 0; i < shoppingCart.length; i++) {
    
    const cartLineItem = shoppingCart[i];
    
    console.log(carList, 'literally')
    console.log(cartLineItem.id, 'hi')
    
    const carInCart = findById(carList, cartLineItem.id);
    const putThisInCartDom = renderCartItems(cartLineItem, carInCart);

    tbody.appendChild(putThisInCartDom);
    
}

const finalOrderTotal = calcOrderTotal(shoppingCart);
orderTotalTd.textContent = finalOrderTotal;

if (shoppingCart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        alert('Order placed ' + JSON.stringify(shoppingCart));
        localStorage.removeItem('SHOPPINGCART');

        window.location = '../index.html';
    })
};
