let containerText = document.querySelector('.container-text');
let containerDetails = document.querySelector('.container-details');


document.body.addEventListener('keydown', function(event){

    containerText.style.display = 'none';
    containerDetails.style.display = 'flex';

    console.log(event);
})