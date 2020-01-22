
function createProducts(cars) {

    const span = document.createElement('span');
        


    
    const img = document.createElement('img');
        img.className = cars.image;
        img.src = cars.image;
        img.alt = cars.name + ' image';
        span.appendChild(img);


    const p = document.createElement('p');
        p.className = cars.name;
        p.textContent = cars.name;
        span.appendChild(p);

    const p = document.createElement('p');
        p.className = cars.description;
        p.textContent = cars.description;
        span.appendChild(p);

    const p = document.createElement('p');
        p.className = cars.category;
        p.textContent = cars.category;
        span.appendChild(p);

    const p = document.createElement('p');
        p.className = cars.price;
        p.textContent = cars.price;
        span.appendChild(p);

    const button = document.createElement('button');
        button.textContent = 'Select';
        span.appendChild(button);
            
return span;


}
export default createProducts;