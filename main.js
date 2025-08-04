      
AOS.init();
      
      const hero = document.querySelector(".hero")
            const header = document.querySelector(".header")
            window.onscroll = ()=>{
                if(window.scrollY > 0){
                header.classList.add("scroll")
                if(header.classList.contains("scroll")){
                  hero.classList.add("active")
                }else{
                  hero.classList.remove("active")
                }
            }
            }
            document.addEventListener("DOMContentLoaded", function () {
            const sections = document.querySelectorAll("section[id]");
            const navLinks = document.querySelectorAll(".nav-link");

            window.addEventListener("scroll", function () {
                let current = "";

                sections.forEach(function (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute("id");
                }
                });

                navLinks.forEach(function (link) {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
                });
            });
            });
            
const Accordion = document.querySelectorAll(".accordion")
Accordion.forEach((acc)=>{
    const header  = acc.querySelector(".accordion-header")
    const content = acc.querySelector(".accordion-content")
    const btn = acc.querySelector(".sign")
    header.addEventListener("click" , ()=>{
        content.classList.toggle("active")
        header.classList.toggle("active")
        if(content.classList.contains("active")){
            btn.innerHTML = "-"
        }else{
            btn.innerHTML = "+"

        }
    })
})


const form = document.getElementById("form")
const username = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")

function show_error(input,message){
    const form_control = input.parentElement;
    form_control.className = "form-control error";
    const span = form_control.querySelector("span")
    span.innerText = message;
  }

  function show_success(input,message){
    const form_control = input.parentElement;
    // form_control.className = "form-control succes";
    const span = form_control.querySelector("span")
    span.innerText = message;
  }
form.addEventListener("submit",(e)=>{
      let isValid = true;
  if(username.value.trim() === "")
  {
    show_error(username,"Enter Your Name")
    isValid = true
  }else{
    show_success(username ,`Hello ${username.value.trim()}`)
  }
  if(email.value.trim() === "")
  {
    show_error(email,"Enter Your Email")
            isValid = false;

  }else{
    show_success(email,"")
  }
  if(message.value.trim() === "")
  {
    show_error(message,"Enter Your Message")
            isValid = false;

  }else{
    show_success(message,"")
  }
  if(phone.value.trim() === "")
  {
    show_error(phone,"Enter Your Phone Number")
            isValid = false;

  }
  else if(phone.value.trim().length < 11)
  {
    show_error(phone,"Enter a Valid Phone Number")
            isValid = false;

  }
  else{
    show_success(phone,"")
  }
  if(isValid === false){
       e.preventDefault();
    }  
})


const burger = document.querySelector(".burger")
const links = document.querySelector(".links")
const close = document.getElementById("close")
burger.addEventListener("click",()=>{
  links.classList.add("active")
  if(links.classList.contains("active")){
    close.classList.add("active")
    burger.classList.add("not-active")
  }
})
close.addEventListener("click" , ()=>{
  links.classList.remove("active")
  if(!links.classList.contains("active")){
    close.classList.remove("active")
    burger.classList.remove("not-active")

  }
})


navLinks.addEventListener("click" , ()=>{
  links.classList.remove("active")
})

