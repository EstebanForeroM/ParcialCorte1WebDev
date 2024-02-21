let buttons = document.getElementsByClassName("shop-container");

console.log(buttons[0]);

buttons[0].addEventListener('click', event => {
    console.log('click');
    buttons[0].classList.toggle('shop-container-hidden');
});

