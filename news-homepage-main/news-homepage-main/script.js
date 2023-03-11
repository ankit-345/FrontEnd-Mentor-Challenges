const openIcon = document.querySelector('.open-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeImg = document.querySelector('.open-icon img');
const blackSheet = document.getElementById('black-sheet');
console.log(blackSheet)

openIcon.addEventListener("click", (e) =>{
  e.preventDefault();
    mobileNav.classList.toggle('is-active');
    if(mobileNav.classList.contains('is-active')){
        openIcon.innerHTML = '<img style="padding: 5px 5px 0;" src="assets/images/icon-menu-close.svg" alt="open_icon_menu">'
        blackSheet.classList.add('open-close');
    }
    else{
        openIcon.innerHTML = '<img style="padding: 12px 2px 0px;" src="assets/images/icon-menu.svg" alt="open_icon_menu">'
        blackSheet.classList.remove('open-close');
    }
})