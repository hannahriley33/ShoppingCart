import carList from '../data/cars.js';
import cart from '../data/cart.js';


export default function renderCartItems(lineItem, carList)  {
    
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
        tdName.textContent = carList.name;
        tr.appendChild(tdName);

    const tdQuantity = document.createElement('td');
        tdQuantity.textContent = lineItem.quantity;
        tr.appendChild(tdQuantity);

    const tdPrice = document.createElement('td');
        tdPrice.textContent = carList.price;
        tr.appendChild(tdPrice);

    return tr;

}


