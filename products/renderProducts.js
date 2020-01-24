import { findById } from "../common/utils";

export default function createProducts(cars) {

    const li = document.createElement('li');
        


    
    const img = document.createElement('img');
        img.src = cars.image;
        img.alt = cars.name + ' image';
        li.appendChild(img);


    const h2 = document.createElement('h2');
       
        h2.textContent = cars.name;
        li.appendChild(h2);

    const p = document.createElement('p');
       
        p.textContent = cars.description;
        li.appendChild(p);

    const aside = document.createElement('aside');
        
        aside.textContent = cars.category;
        li.appendChild(aside);

    const h4 = document.createElement('h4');
       
        h4.textContent = cars.price;
        li.appendChild(h4);

    const button = document.createElement('button');
        button.textContent = 'Select';
        button.value = cars.id;
        button.addEventListener('click', () =>  {
            let json = localStorage.getItem('shoppingCart');
            let shoppingCart;
            if (json) {
                cart = JSON.parse(json);
            }
            else {
                cart = [];
            }

            let carLineItem = findById(shoppingCart, cars.id);
            
            if (carLineItem) {
                carLineItem.quantity++
            }
            else {
                const carLineItem = {
                    id: cars.id,
                    quantity: 1
                };
                shoppingCart.push(carLineItem);
            }

            json = JSON.stringify(shoppingCart);
            localStorage.setItem('shoppingCart', json);    

        });
        li.appendChild(button);
            
return li;


};


