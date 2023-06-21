const input = document.getElementById('input');
const emailBtn = document.querySelector('.email-button');
const errorMsg = document.querySelector('.error-message');
const facebook = document.querySelector('.fa-facebook')
const twitter = document.querySelector('.fa-twitter')
const instagram = document.querySelector('.fa-instagram')

const sliderBoxes = document.querySelectorAll('.slideIn');

emailBtn.addEventListener('click', () =>{
    const value = input.value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(value.match(validRegex)){
        errorMsg.classList.remove('visible');
        errorMsg.classList.add('invisible');
    }else{
        errorMsg.classList.remove('invisible');
        errorMsg.classList.add('visible')
    }
})


