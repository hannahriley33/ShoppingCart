function RenderCartItems(foo, bar)  {
    
    const tr = document.createElement('tr');

    const td = document.createElement('td');
        td.textContent = carList.name;
        tr.appendChild(td);

    const td1 = document.createElement('td');
        td1.textContent = cart.quantity;
        tr.appendChild(td1);

    const td2 = document.createElement('td');
        td2.textContent = carList.price;
        tr.appendChild(td2);

return tr;

}

export default RenderCartItems;
