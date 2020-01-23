import {cars} from "../products/renderProducts";
import {cart} from "../data/cart";

function RenderCartItems(lineItem, cars)  {
    
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
        td.textContent = cars.name;
        tr.appendChild(tdName);

    const tdQuantity = document.createElement('td');
        tdQuantity.textContent = cart.quantity;
        tr.appendChild(tdQuantity);

    const tdPrice = document.createElement('td');
        tdPrice.textContent = cars.price;
        tr.appendChild(tdPrice);

return tr;

}

export default RenderCartItems;
