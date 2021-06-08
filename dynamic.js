let title;
let productElement, imageElement;
const products = document.getElementById("products")
var i=0;
for (let product of productList) {
    const { name, price, brand, preview } = product;
    productElement = document.createElement('div');
    productElement.style.width = '15%';
    productElement.id =  "box";
    // productElement.style.color = 'red';
    // productElement.textContent = name;
    // Description
    // descriptionElement = document.createElement('p');
    // descriptionElement.textContent = description;
    // descriptionElement.style.color = 'blue';
    // productElement.appendChild(descriptionElement)

    //Image
    imageElement = document.createElement('img');
    imageElement.src = preview;
    imageElement.style.width = '100%';
    productElement.appendChild(imageElement)

    title_ele = document.createElement('h4');
    title_ele.textContent= name;
    productElement.appendChild(title_ele);

    brand_ele = document.createElement('p');
    brand_ele.textContent = brand;
    productElement.appendChild(brand_ele);

    price_ele = document.createElement('h5');
    price_ele.textContent = "Rs "+ price;
    price_ele.style.color = '#009688';
    productElement.appendChild(price_ele);



    //title
    

    //Append ALL
    products.appendChild(productElement)
    if(i<4) i++;
    else break;
}



let tit;
let productElem, imageElem;
const products2 = document.getElementById("products2")
var i=0;
for (let product of productList) {
    if(i<=4){
        i++;
        continue;
    }
    const { name, price, brand, preview } = product;
    productElem = document.createElement('div');
    productElem.style.width = '15%';
    productElem.id =  "box";
    
    imageElem = document.createElement('img');
    imageElem.src = preview;
    imageElem.style.width = '100%';
    productElem.appendChild(imageElem)

    title_elem = document.createElement('h4');
    title_elem.textContent= name;
    productElem.appendChild(title_elem);

    brand_elem = document.createElement('p');
    brand_elem.textContent = brand;
    productElem.appendChild(brand_elem);

    price_elem = document.createElement('h5');
    price_elem.textContent = "Rs "+ price;
    price_elem.style.color = '#009688';
    productElem.appendChild(price_elem);



    //title
    

    //Append ALL
    products2.appendChild(productElem)
    
}