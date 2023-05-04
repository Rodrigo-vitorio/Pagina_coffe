let navbar =document.querySelector('.navbar');

document.querySelector('#bars-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');
}

let cartItem =document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}

let search =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    cartItem.classList.remove('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}