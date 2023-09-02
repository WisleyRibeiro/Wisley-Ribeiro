let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

const btn_lnk = document.querySelector("#linkedin");
const btn_cv = document.querySelector("#CV");
const btn_contact = document.querySelector("#contact-buttom");
const instagram_icon = document.querySelector("#instagram");
const wisley_js = document.querySelector("#wisley-js");
let url = "";

function link(){
  window.open(url, "_blank");
}

btn_lnk.addEventListener("click", () => {
  url = "https://www.linkedin.com/in/wisley-ribeiro-lopes/";
  link()
})

btn_cv.addEventListener("click", () => {
  url = "https://drive.google.com/file/d/1V-AKirLcyEGkjNAlvdGz00n2KZdJmjK7/view?usp=drive_link";
  link();
})

btn_contact.addEventListener("click", () => {
  url = "https://api.whatsapp.com/send?phone=5531971044156&text=Ol%C3%A1%20Wisley!%20Podemos%20conversar?%20%F0%9F%98%81";
  link();
})

instagram_icon.addEventListener("click", () => {
  url = "https://instagram.com/r.lopes.py?utm_source=qr&igshid=OGIxMTE0OTdkZA==";
  link();
})

wisley_js.addEventListener("click", () => {
  url = "https://www.linkedin.com/in/wisley-ribeiro-lopes/";
  link();
})