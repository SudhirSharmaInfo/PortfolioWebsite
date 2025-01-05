var typed = new Typed(".Marking", {
    strings: ["Full Stack Web Developer!" , "Programmer" , "Graphic Designer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});

let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// var loader = document.getElementById("preloader")

// window.addEventListener("load", function(){
//     loader.style.display = "none";
    
// })

const aboutBtns = document.querySelectorAll('.about-btn');

aboutBtns.forEach((btn, idx) => {
    btn.addEventListener('click',()=>{

        const aboutDetails = document.querySelectorAll('.about-right-section');

        aboutBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        aboutDetails.forEach(details => {
            details.classList.remove('active');
        });
        aboutDetails[idx].classList.add('active');
    });
});

const portfolioBtns = document.querySelectorAll('.portfolio-btn');

portfolioBtns.forEach((btn, idx) => {
    btn.addEventListener('click',()=>{

        const portfolioDetails = document.querySelectorAll('.portfolio-section-main-container');

        portfolioBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        portfolioDetails.forEach(details => {
            details.classList.remove('active');
        });
        portfolioDetails[idx].classList.add('active');
    });
});


function mobilenav() {
    document.getElementById("mobile-navbar-option-main").style.transform = "translateX(0%)";
    document.getElementById("mobile-navbar-option-main").style.transition = "transform 0.3s";
}
function mobileclose() {
    document.getElementById("mobile-navbar-option-main").style.transform = "translateX(100%)";
    document.getElementById("mobile-navbar-option-main").style.transition = "transform 0.3s";
}