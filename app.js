// Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');

    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
// Remove menu from mobile
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//email js
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
   e.preventDefault()
   
   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = 'Write all the input fields !'
    
   }else{
    emailjs.sendForm('service_fic21dp', 'template_4ex8a8i' ,'#contact-form' ,'B0gdnaltm0h77Gmnc')
    .then(()=>{
        contactMessage.classList.add("color-blue")
        contactMessage.textContent = 'Message sent !'

        setTimeout(() =>{
            contactMessage.textContent = " "
        }, 5000)

    }, (error) =>{
           alert('OPPSSOMTHING WAS FAILED...', error)
    })

    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''

   }
}
contactForm.addEventListener('submit', sendEmail)



const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon': 'fa-sun>'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
// chnage background header

const scrollHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll' , scrollHeader)