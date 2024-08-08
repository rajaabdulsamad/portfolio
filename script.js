let emailElemet = document.querySelector('#email');
let messageElemen = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', function(e){
    e.preventDefault();

    let emailValue = emailElemet.value;
    let messageValue = messageElemen.value;

    if(emailValue.includes('@')){
        //all good
        alert('Thank you for your message');
    }else{
        alert('That is not a valid email adress');
    }
} )