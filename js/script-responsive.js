const body = document.body
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu-btn')

function menuopen() {
  body.classList.add("disabled");
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
}

function menuclose() {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}