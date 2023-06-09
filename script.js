// menu show //
const showMenu = (toggleId , navId) =>
{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav)
    {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu ('nav-toggle','nav-menu')

// active and remove menu //
const  navLink = document.querySelectorAll('.nav__link')

function linkAction() 
{
    // active link 
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //remove show 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n =>n.addEventListener('click',linkAction))

//  scroll reveal animation //
const sr = scrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})

// scroll home //
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})

//   data receiver using //

  