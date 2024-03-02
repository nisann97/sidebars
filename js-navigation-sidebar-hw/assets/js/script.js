"use strict";

const sideBar = document.querySelector(".sidebar");
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-square-xmark");
const house = document.querySelector(".fa-house");
const search = document.querySelector(".fa-magnifying-glass");
const insights = document.querySelector(".fa-square-poll-vertical");
const docs = document.querySelector(".fa-file");
const menu = document.querySelector(".text");
const display = document.querySelector(".display-mode");
const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const upperSideBar = document.querySelector(".upper-sidebar");
const rightSideBar = document.querySelector(".sidebar.right");
const downSideBar = document.querySelector(".down-sidebar");



open.addEventListener("click", function (){
    sideBar.classList.add("sidebar-active");
    open.classList.add("d-none");
    close.classList.remove("d-none");
    menu.classList.remove("d-none");
    house.classList.remove("close");
    house.classList.add("active")
    search.classList.remove("close");
    search.classList.add("active")
    insights.classList.remove("close");
    insights.classList.add("active")
    docs.classList.remove("close");
    docs.classList.add("active")
    display.classList.remove("d-none");
    sun.addEventListener("click", function () {

        sun.style.transform = "translate(40px, 0)";
        sun.classList.add("d-none");
        moon.classList.remove("d-none")
        document.querySelector("body").style.backgroundColor = "black"
        sideBar.style.backgroundColor = "#80808054"
        upperSideBar.style.backgroundColor = "#80808054"
        rightSideBar.style.backgroundColor = "#80808054";
        downSideBar.style.backgroundColor = "#80808054";
    })

    moon.addEventListener("click", function () {
        moon.classList.add("d-none");
        sun.style.transform = "translate(-2px, 0)";
        sun.style.transition = "all 0.5s"
        sun.classList.remove("d-none")
        document.querySelector("body").style.backgroundColor = "white"
        sideBar.style.backgroundColor = "black"
        upperSideBar.style.backgroundColor = "black"
        rightSideBar.style.backgroundColor = "black"
        downSideBar.style.backgroundColor = "black"

    })
})

close.addEventListener("click", function (){
    sideBar.classList.remove("sidebar-active");
    open.classList.remove("d-none");
    close.classList.add("d-none");
    menu.classList.add("d-none");
    house.classList.add("close");
    house.classList.remove("active")
    search.classList.add("close");
    search.classList.remove("active")
    insights.classList.add("close");
    insights.classList.remove("active")
    docs.classList.add("close");
    docs.classList.remove("active")
    display.classList.add("d-none");
})


const upperOpen = document.querySelector(".fa-bars.upper");
const upperClose = document.querySelector(".fa-square-xmark.upper");
const basket = document.querySelector(".fa-cart-shopping");
const settings = document.querySelector(".fa-gears");
const message = document.querySelector(".fa-message");
const upperText = document.querySelector(".text-upper");

upperOpen.addEventListener("click", function () {
    upperSideBar.classList.add("active");
    upperOpen.classList.add("d-none");
    upperClose.classList.remove("d-none");
    upperText.classList.remove("d-none");
    basket.classList.add("active");
    message.classList.add("active");
    settings.classList.add("active");

})

upperClose.addEventListener("click", function () {
    upperSideBar.classList.remove("active");
    upperOpen.classList.remove("d-none");
    upperClose.classList.add("d-none");
    upperText.classList.add("d-none");
    basket.classList.remove("active");
    message.classList.remove("active");
    settings.classList.remove("active");

})

const rightOpen = document.querySelector(".fa-bars.right");
const rightClose = document.querySelector(".fa-square-xmark.right");
const rightHome = document.querySelector(".fa-house.right");
const rightSearch = document.querySelector(".fa-magnifying-glass.right");
const rightInsights = document.querySelector(".fa-square-poll-vertical.right");
const rightDocs = document.querySelector(".fa-file.right");
const rightMenu = document.querySelector(".text-right");



rightOpen.addEventListener("click", function () {
    rightSideBar.classList.add("active");
    rightOpen.classList.add("d-none");
    rightClose.classList.remove("d-none");
    rightMenu.classList.remove("d-none");
    rightHome.classList.remove("close");
    rightHome.classList.add("active")
    rightSearch.classList.remove("close");
    rightSearch.classList.add("active")
    rightInsights.classList.remove("close");
    rightInsights.classList.add("active")
    rightDocs.classList.remove("close");
    rightDocs.classList.add("active")

})

rightClose.addEventListener("click", function () {
    rightSideBar.classList.remove("active");
    rightOpen.classList.remove("d-none");
    rightClose.classList.add("d-none");
    rightMenu.classList.add("d-none");
    rightHome.classList.add("close");
    rightHome.classList.remove("active")
    rightSearch.classList.add("close");
    rightSearch.classList.remove("active")
    rightInsights.classList.add("close");
    rightInsights.classList.remove("active")
    rightDocs.classList.add("close");
    rightDocs.classList.remove("active")

})

const downOpen = document.querySelector(".fa-bars.down");
const downClose = document.querySelector(".fa-square-xmark.down");
const downBasket = document.querySelector(".fa-cart-shopping.down");
const downSettings = document.querySelector(".fa-gears.down");
const downMessage = document.querySelector(".fa-message.down");
const downText = document.querySelector(".text-down");

downOpen.addEventListener("click", function () {
    downSideBar.classList.add("active");
    downOpen.classList.add("d-none");
    downClose.classList.remove("d-none");
    downText.classList.remove("d-none");
    downBasket.classList.add("active");
    downMessage.classList.add("active");
    downSettings.classList.add("active");

})

downClose.addEventListener("click", function () {
    downSideBar.classList.remove("active");
    downOpen.classList.remove("d-none");
    downClose.classList.add("d-none");
    downText.classList.add("d-none");
    downBasket.classList.remove("active");
    downMessage.classList.remove("active");
    downSettings.classList.remove("active");

})
