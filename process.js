const main = document.getElementById('body');
const cart = main
                .firstElementChild
                .nextElementSibling
                .firstElementChild
                .nextElementSibling
                
                

const body = document.getElementById('body');
const products = Array.from(body
                .firstElementChild
                .nextElementSibling
                .firstElementChild
                .firstElementChild
                .nextElementSibling
                .children);

products.forEach((products) => {
    products.addEventListener('click', ()=>{

        const div = document.createElement('div');
const productName = document.createElement('h6');
const price = document.createElement('small');

productName.innerText = products.firstElementChild.innerText;
div.classList.add('bg-pink-400');
    div.append(productName);
    console.log(div);
    cart.append(div);

div.classList.add('flex');
console.log(products
    .firstElementChild
    .innerText
   

);
    })
});
//Create new 
