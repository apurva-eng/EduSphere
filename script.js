// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// COURSE ENROLL BUTTON
// ===============================

const enrollBtns = document.querySelectorAll(".course-card button");

enrollBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Enrollment Successful!");

    });

});

// ===============================
// QUIZ
// ===============================

const quizBtn = document.getElementById("quizBtn");

if(quizBtn){

quizBtn.addEventListener("click",()=>{

document.getElementById("quizResult").innerHTML =
"✅ Correct! HTML stands for Hyper Text Markup Language.";

});

}

// ===============================
// CONTACT FORM
// ===============================

const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent.");

form.reset();

});

// ===============================
// SCROLL TO TOP
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// DARK MODE
// ===============================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.id="darkBtn";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀️";

}else{

darkBtn.innerHTML="🌙";

}

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// PAGE LOADED
// ===============================

window.onload=()=>{

console.log("EduSphere Loaded Successfully");

};