
export default function renderCartItems(lineItem, cars)  {
    
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
        tdName.textContent = cars.name;
        tr.appendChild(tdName);

    const tdQuantity = document.createElement('td');
        tdQuantity.textContent = lineItem.quantity;
        tr.appendChild(tdQuantity);

    const tdPrice = document.createElement('td');
        tdPrice.textContent = cars.price;
        tr.appendChild(tdPrice);

    return tr;

}


