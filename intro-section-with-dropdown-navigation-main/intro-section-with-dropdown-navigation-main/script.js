const openIcon = document.querySelector('.open-icon');
const imageContainer = document.getElementById('image');
const sideBar = document.querySelector('.sidebar');
const blackSheet = document.querySelector('.black-sheet');
const Navbar_dropdowns = document.querySelectorAll('.navbar .dropdown');
const sidebar_Navbar_dropdowns = document.querySelectorAll('.sidebar .dropdown'); 


openIcon.addEventListener("click", (e) =>{
    e.preventDefault();
    sideBar.classList.toggle('is-active');
    if(sideBar.classList.contains('is-active')){
        imageContainer.innerHTML = '<img src="images/icon-close-menu.svg" alt="icon-menu">'
        blackSheet.classList.add('open');
    }
    else{
        imageContainer.innerHTML = '<img src="images/icon-menu.svg" alt="icon-menu">';
        blackSheet.classList.remove('open');
    }
});


Navbar_dropdowns.forEach((Navbar_dropdown) =>{
    const dropdownContent = Navbar_dropdown.querySelector('.dropdown-content');
    Navbar_dropdown.addEventListener('mouseover', ()=>{
        if(dropdownContent.classList.contains('show')){
            Navbar_dropdown.querySelector('.dropdown a > img').classList.add('open');
            Navbar_dropdown.querySelector('.dropdown a').classList.add('open');
        }
     })
     
     Navbar_dropdown.addEventListener('mouseout', () =>{
        Navbar_dropdown.querySelector('.dropdown a > img').classList.remove('open');
        Navbar_dropdown.querySelector('.dropdown a').classList.remove('open');
     })
})


/* For Mobile Devices */

sidebar_Navbar_dropdowns.forEach((Navbar_dropdown) =>{
    const dropdownanchor = Navbar_dropdown.querySelector('.dropdown-content a');
    console.log(dropdownanchor)
    Navbar_dropdown.addEventListener('click', ()=>{
        Navbar_dropdown.querySelector('.sidebar .dropdown a > img').classList.toggle('open');
        Navbar_dropdown.querySelector('.sidebar .dropdown-content').classList.toggle('open');
        
     })
})


