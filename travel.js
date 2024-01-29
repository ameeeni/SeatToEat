//the toggle part 
let toggleBtn = document.querySelector('.toggle');
let menuDis = document.querySelector('.menu');
toggleBtn.addEventListener('click', () => {
    menuDis.classList.toggle('show')
    toggleBtn.classList.toggle('fa-times');
});

//the login part 
let searchBtn = document.querySelector("#search-id");
let searchBar = document.querySelector(".form");

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
window.onload = function() {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
};

//Manipulating the login and sign up Part with JS
function setFormMessage(formElement, type, message) {
    let messageElement = formElement.querySelector(".form-message");
}
document.addEventListener("DOMContentLoaded", () => {
    let loginForm = document.querySelector("#login");
    let CreateAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#CreateAccountForm").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        CreateAccountForm.classList.remove("form-hidden");
    });
    document.querySelector("#linkedLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        CreateAccountForm.classList.add("form-hidden");
    });
});

//the popup of the login 

let loginPop = document.getElementById("id-login");
let formDis = document.querySelector(".auth-bloc");
loginPop.addEventListener('click', () => {
    formDis.style.display = "flex";
});
let loginClose = document.querySelector(".close");
loginClose.addEventListener('click', () => {
    formDis.style.display = "none";
});

//slider code

document.querySelectorAll('.home').forEach(home => {
    let items = home.querySelectorAll('.content');
    let buttonHtml = Array.from(items, () => {
        return `<div class="btn"></div>`;
    });
    home.insertAdjacentHTML('beforeend', `
    <div class="pagination-buttons">
      ${buttonHtml.join("")}
    </div>
    `);
    let buttons = home.querySelectorAll('.btn');
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove("selected-content"));
            buttons.forEach(button => button.classList.remove("selected-pagination-btn"));

            items[i].classList.add('selected-content');
            button.classList.add('selected-pagination-btn');

        });
    });
});
document.querySelectorAll('.menu-item').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(e) {
        e.preventDefault();
        var name = this.querySelector('h3').innerText; 
        var price = this.querySelector('.price').innerText;
        var imageSrc = this.querySelector('img').src;
        var storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        var newProduct = {
            name: name,
            price: price,
            image: imageSrc
        };
        storedProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(storedProducts));
    });
});

function handleLogin() {
    var usernameInput = document.querySelector('#name');
    var passwordInput = document.querySelector('#password');

    if (usernameInput && passwordInput) {
        var username = usernameInput.value;
        var password = passwordInput.value;

        console.log('Username:', username);
        console.log('Password:', password);

        if (username === 'admin' && password === 'admin') {
            console.log('Redirecting to administration.html');
            window.location.href = 'administration.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.querySelector('#login');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin(); 
    });

    var continueButton = document.querySelector('.form-button');
    continueButton.addEventListener('click', function(event) {
        event.preventDefault();
        handleLogin(); 
    });
});
