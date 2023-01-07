let myName = "Vadim";
let age = 20;
let boo = true;

const header = document.querySelector("#header");
let navblock1 = document.querySelector("#navblock1");
let navblock2 = document.querySelector("#navblock2");
let navblock3 = document.querySelector("#navblock3");
let navblock4 = document.querySelector("#navblock4");
let navblock5 = document.querySelector("#navblock5");



/* //////  FUNCTION  ///   NUMBER PLUS ONE   ////// */
function numberPlus() {
    let message = 4000 + 1000;
    console.log(message);
}

numberPlus();


/* //////  FUNCTION  ///   NUMBER PLUS TWO   ////// */
function math(a, b) {
    let ab = a + b;
    console.log(ab);
}

math(1100, 2200);


/* //////  FUNCTION  ///   NUMBER ONE CONDITIONS   ////// */
window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('new');
    } else {
        header.classList.remove('new');
    }

  /*console.log(scrollPos);*/
});



/* //////  FUNCTION  ///   ANOTHER COLOR   ////// */
window.addEventListener("scroll", function () {
    let navsistem = window.scrollY;

    if(navsistem > 0) {
        navblock1.classList.add('black');
        navblock2.classList.add('black');
        navblock3.classList.add('black');
        navblock4.classList.add('black');
        navblock5.classList.add('black');
    } else {
        navblock1.classList.remove('black');
        navblock2.classList.remove('black');
        navblock3.classList.remove('black');
        navblock4.classList.remove('black');
        navblock5.classList.remove('black');
    }
})


/* //////  FUNCTION  ///   NUMBER PLUS THREE   ////// */
function infoLike(a, b) {
    let likeObject = a + b;
    console.log(likeObject);
}

infoLike(5000, 5000);


/* //////  FUNCTION  ///   ANIMATION FEATURES   ////// */
let animationFeatures1 = document.querySelector('#feaAnima1');
let animationFeatures2 = document.querySelector('#feaAnima2');
let animationFeatures3 = document.querySelector('#feaAnima3');
let animationFeatures4 = document.querySelector('#feaAnima4');
let animationFeatures5 = document.querySelector('#feaAnima5');
let animationFeatures6 = document.querySelector('#feaAnima6');

window.addEventListener("scroll", function() {
    let animaFeat = window.scrollY;

    if(animaFeat > 60) {
        animationFeatures1.classList.add('feaAnima');
    } else {
        animationFeatures1.classList.remove('feaAnima');
    }

    if(animaFeat > 310) {
        animationFeatures2.classList.add('feaAnima');
    } else {
        animationFeatures2.classList.remove('feaAnima');
    }

    if(animaFeat > 500) {
        animationFeatures3.classList.add('feaAnima');
    } else {
        animationFeatures3.classList.remove('feaAnima');
    }

    if(animaFeat > 800) {
        animationFeatures4.classList.add('feaAnima');
    } else {
        animationFeatures4.classList.remove('feaAnima');
    }

    if(animaFeat > 1070) {
        animationFeatures5.classList.add('feaAnima');
    } else {
        animationFeatures5.classList.remove('feaAnima');
    }

    if(animaFeat > 1300) {
        animationFeatures6.classList.add('feaAnima');
    } else {
        animationFeatures6.classList.remove('feaAnima');
    }
})

/* ANIMATION FOR IPHONE ////// BLOCK TEAM */
let animationPhotoTeamNamber1 = document.querySelector('#teamPhotoAnimation1');

let animationPhotoTeamNamber2 = document.querySelector('#teamPhotoAnimation2');

let animationPhotoTeamNamber3 = document.querySelector('#teamPhotoAnimation3');

let animationPhotoTeamNamber4 = document.querySelector('#teamPhotoAnimation4');

window.addEventListener("scroll", function () {
    let teamAnimation = window.scrollY;

    if(teamAnimation > 4100) {
        animationPhotoTeamNamber1.classList.add('animationPhoto');
    } else {
        animationPhotoTeamNamber1.classList.remove('animationPhoto');
    }

    if(teamAnimation > 4700) {
        animationPhotoTeamNamber2.classList.add('animationPhoto');
    } else {
        animationPhotoTeamNamber2.classList.remove('animationPhoto');
    }

    if(teamAnimation > 5300) {
        animationPhotoTeamNamber3.classList.add('animationPhoto');
    } else {
        animationPhotoTeamNamber3.classList.remove('animationPhoto');
    }

    if(teamAnimation > 5900) {
        animationPhotoTeamNamber4.classList.add('animationPhoto');
    } else {
        animationPhotoTeamNamber4.classList.remove('animationPhoto');
    }
})


/* ANIMATION FOR IPHONE BLOCK */
let animationDownloadTwo = document.querySelector('#gerlIphone');

window.addEventListener("scroll", function () {
    let gerlTwo = window.scrollY;

    if(gerlTwo > 7200) {
        animationDownloadTwo.classList.add('gerlLineIphone');
    } else {
        animationDownloadTwo.classList.remove('gerlLineIphone');
    }
})


/* FUNCTION  ///  SCROLL */
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll(".nav__link");

    for(let i = 0; i<links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();

            const blockID = event.target.getAttribute("href").substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            })

        })
    }
})


/* FUNCTION  ///  SCROLL TOP FOR LOGO */
document.addEventListener('DOMContentLoaded', function() {
    const topActive = document.querySelectorAll('#zeroNew');

    for(let i = 0; i < topActive.length; i++) {

        topActive[i].addEventListener('click', function(event) {
            event.preventDefault();

    const activeID = event.target.getAttribute('href').substring(1);

            document.getElementById(activeID).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            })

        })
    }
})



let zero = document.querySelector('#zeroNew');

window.addEventListener('scroll', function() {
    let zeroget = window.scrollY;

    if(zeroget > 500) {
        zero.classList.add('zeroll')
    } else {
        zero.classList.remove('zeroll')
    }
})



/* FUNCTION  ///  CLICK */
const burgerClick = document.querySelector('#burgerClick');
const navClick = document.querySelector('#navClick');


burgerClick.addEventListener("click", clickBurger);

function clickBurger(e) {
    e.preventDefault();
    navClick.classList.toggle("active");
}


burgerClick.addEventListener("click", function() {
    burgerClick.classList.toggle("active");
})















