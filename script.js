const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Mobile Menu 

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)


const hideMobileMenu = () =>{
    const menubars = document.querySelector('.is-active')
    if(window.innerWidth <- 768 && menubars)
    {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.add('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)
