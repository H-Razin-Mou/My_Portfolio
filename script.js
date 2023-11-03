// header toggle mobile screen
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//active link state on scroll

//get all links
let navLinks=document.querySelectorAll('nav ul li a')
console.log(navLinks)

//get all sections
let sections=document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll',function(){
    const scrollPos=window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyCAC2g7Aq7XjNTXvZYwAkP22gDFyy6yzrRy4aIiTmPSKn37G_hYZfK4Sky1caLeG5XjA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit',e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'post',body: new FormData(form)})
    .then(response => alert("Message sent successfully"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!',error.message))
})