let containerText = document.querySelector('.container-text');
let containerDetails = document.querySelector('.container-details');

let key = document.querySelector('#key');
let location = document.querySelector('#location');
let which = document.querySelector('#which');
let code = document.querySelector('#code');

document.body.addEventListener('keydown', function(event){

    containerText.style.display = 'none';
    containerDetails.style.display = 'flex';

    console.log(event);
})