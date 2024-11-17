let containerText = document.querySelector('.container-text');
let containerDetails = document.querySelector('.container-details');
let numberCode = document.querySelector('.number');

let keyElem = document.querySelector('#key');
let locationElem = document.querySelector('#location');
let whichElem = document.querySelector('#which');
let codeElem = document.querySelector('#code');

document.body.addEventListener('keydown', function(event){

    event.preventDefault();

    containerText.style.display = 'none';
    containerDetails.style.display = 'flex';

    numberCode.innerHTML = event.keyCode;
    keyElem.innerHTML = event.key;
    locationElem.innerHTML = event.location;
    whichElem.innerHTML = event.which;
    codeElem.innerHTML = event.code;
})