const btns = document.querySelectorAll('.btn');
const cardHeader = document.querySelector('.card-header');
const cardBody = document.querySelector('.card-body');
const cardFooter = document.querySelector('.card-footer');
const submit_btn = document.querySelector('.submit-btn');
const thankBody = document.querySelector('.thank-you-body');
const thankFooter = document.querySelector('.thank-you-footer');
const rate = document.querySelector('.rate');
const thankFooterbtn = document.querySelector('.thank-you-footer-btn');

const card = document.querySelector('.card');

submit_btn.disabled = true;
 
submit_btn.addEventListener('click', () => {
    cardHeader.classList.add('hidden');
    cardBody.classList.add('hidden');
    cardFooter.classList.add('hidden');
    thankBody.classList.remove('hidden');
    thankFooter.classList.remove('hidden');
    thankFooterbtn.classList.remove('hidden');

    card.classList.add('open');
    card.classList.remove('close');

})


thankFooterbtn.addEventListener('click', () => {
    
    cardHeader.classList.remove('hidden');
    cardBody.classList.remove('hidden');
    cardFooter.classList.remove('hidden');
    thankBody.classList.add('hidden');
    thankFooter.classList.add('hidden');
    thankFooterbtn.classList.add('hidden');
    
    card.classList.remove('open');
    card.classList.add('close');

    submit_btn.disabled = true;
})

btns.forEach(btn=> {
    btn.addEventListener('click', () => {
        rate.innerHTML = btn.innerHTML;
        submit_btn.disabled = false;
    })
})

