import { findById } from '../common/utils.js';
// import carList from '../data/cars.js';

export default function createProducts(carList) {

    const li = document.createElement('li');
        


    
    const img = document.createElement('img');
        img.src = carList.image;
        img.alt = carList.name + ' image';
        li.appendChild(img);


    const h2 = document.createElement('h2');
       
        h2.textContent = carList.name;
        li.appendChild(h2);

    const p = document.createElement('p');
       
        p.textContent = carList.description;
        li.appendChild(p);

    const aside = document.createElement('aside');
        
        aside.textContent = carList.category;
        li.appendChild(aside);

    const h4 = document.createElement('h4');
       
        h4.textContent = carList.price;
        li.appendChild(h4);

    const button = document.createElement('button');
        button.textContent = 'Select';
        button.value = carList.id;
        
        button.addEventListener('click', () =>  {
            let json = localStorage.getItem('SHOPPINGCART');
            let shoppingCart;
           
            if (json) {
                shoppingCart = JSON.parse(json);
            }
            else {
                shoppingCart = [];
            }
console.log(shoppingCart);
            let carLineItem = findById(shoppingCart,carList);
            console.log(carList.id);
            if (carLineItem) {
                carLineItem.quantity++;
            }
            else {
                const carLineItem = {
                    id: carList.id,
                    quantity: 1
                };
                shoppingCart.push(carLineItem);
            }

            json = JSON.stringify(shoppingCart);
            localStorage.setItem('SHOPPINGCART', json);    

        });
        li.appendChild(button);
            
return li;


};


