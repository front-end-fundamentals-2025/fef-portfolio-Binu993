
const homeButton = document.getElementById("home");
const workButton = document.getElementById("work");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");
const headElement = document.getElementById("head");

homeButton.addEventListener("mouseover", function(){
    headElement.style.backgroundColor = "#170125";
});

homeButton.addEventListener("mouseout",function(){
    headElement.style.backgroundColor = "#192D5F";
});

workButton.addEventListener("mouseover", function(){
    headElement.style.backgroundColor = "#064957";
});

workButton.addEventListener("mouseout",function(){
    headElement.style.backgroundColor = "#192D5F";
});

aboutButton.addEventListener("mouseover", function(){
    headElement.style.backgroundColor = "#000000";
});

aboutButton.addEventListener("mouseout",function(){
    headElement.style.backgroundColor = "#192D5F";
});

contactButton.addEventListener("mouseover", function(){
    headElement.style.backgroundColor = "#2F0554";
});

contactButton.addEventListener("mouseout",function(){
    headElement.style.backgroundColor = "#192D5F";
});




