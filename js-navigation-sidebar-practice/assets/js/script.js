"use strict";



// let h1 = document.querySelector("h1");

// console.log(h1);
// console.log(document.querySelector(".item"));

// console.log(h1.parentNode);
// // console.log(h1.parentNode.nextElementSibling);

// console.log(h1.parentNode.nextElementSibling.previousElementSibling);

// console.log(h1.parentNode.parentNode);
// console.log(h1.closest(".product"));

// console.log(h1.closest(".product").lastElementChild);


// let elem = document.querySelector(".item1");

// console.log(elem.parentNode.parentNode.nextElementSibling.firstElementChild);

// let h1 = document.querySelector(".test h1");

// console.log(h1.parentNode.lastElementChild.lastElementChild);

// console.log(document.querySelector(".salam").nextElementSibling.lastElementChild)

let btns = document.querySelectorAll("button");

// console.log(btns);

// btns.forEach(btn => {

//     console.log(btn);
// })

// btns.forEach(btn => {

//     btn.addEventListener("click", function() {
//         console.log(this);
//     })
// })

// btns.forEach(btn => {
//     btn.addEventListener("click", function() {

//         this.nextElementSibling.style.backgroundColor = "red";

// }
// )
// })

// btns.forEach(btn => {
//     btn.addEventListener("click", function(e){
//         console.log(e.target);
//     })
// })

// document.addEventListener("keydown", function(e){
//     if(e.keyCode == 13){
//         document.querySelector("body").style.backgroundColor = "black"
//   }

// })

let sideBar = document.querySelector(".sidebar");

let openIcon =  document.querySelector(".open-icon")
let closeIcon = document.querySelector(".close-icon")

// openIcon.addEventListener("click", function() {

//     sideBar.classList.remove("move-sidebar")
//     this.classList.add("d-none");
//     closeIcon.classList.remove("d-none");
// })

// closeIcon.addEventListener("click", function (){
//     sideBar.classList.add("move-sidebar")
//     this.nextElementSibling.classList.remove("d-none")
//     this.classList.add("d-none");

// })

// document.querySelector(".paste").addEventListener("click", function() {

//     document.querySelector("h2").innerText = document.querySelector("h1").innerText;
//     document.querySelector("h1").innerText = "";
// })

// let sendBtn = document.querySelector(".send");

// sendBtn.addEventListener("mouseover", function() {
    
// this.classList.remove("btn-primary")
// this.classList.add("btn-success")
// })

// sendBtn.addEventListener("mouseout", function() {
    
//     this.classList.remove("btn-success")
//     this.classList.add("btn-primary")
//     })

let input = document.querySelector("input");


// input.addEventListener("keydown", function(){
//     console.log("Aqshin bey")
// })

// input.addEventListener("keyup", function(){
//     console.log("Aqshin bey")
// })

// document.querySelector(".form-select").addEventListener("change", function() {
//     console.log(this.value)
// })

// console.log(document.querySelector("a").getAttribute("href"))


// console.log(document.querySelector("a").setAttribute("href", "salam"));

// console.log(document.querySelector("a").getAttribute("href"));


let linkedinBtn = document.querySelector(".linkedin");
let googleBtn = document.querySelector(".google");

linkedinBtn.addEventListener("click", function(){
    document.querySelector("a").setAttribute("href","https://www.linkedin.com")
    document.querySelector("a").innerText = "Go to LINKEDIN";
})

googleBtn.addEventListener("click", function (){
    document.querySelector("a").setAttribute("href", "https://www.google.com/2");
    document.querySelector("a").innerText="Go to GOOGLE";
})