const header = document.querySelector("header");

const ml_section = document.querySelector(".milestones");
/* const sk_counters = document.querySelectorAll(".counter ") */
const ml_counters = document.querySelectorAll(".number span");

const toggle_btn = document.querySelector(".toggle-btn");


window.addEventListener("scroll", () => {
    if(!skillsPlayed) skillsCounter();
    mlCounter();
})

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if (currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        },12);
    }
}

/* ------------------Sticky Navbar ------------------*/
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* ------------------------Reveal Animation -----------------------*/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
      
});

sr.reveal(".showcase-info", {delay:600});
sr.reveal(".showcase-image", { origin:"top", delay:700});


/* ------------------------Services section Animation --------------------------*/

function mlCounter(){
    if(!hasReached(ml_section)) return;
    ml_counters.forEach( (ctr) => {
        let target = +ctr.dataset.target;
        setTimeout(() => {
            updateCount(ctr,target);

        },400);
    });
}

/*----------------------------Change Page Theme-----------------------*/

function changeTheme(){
    if(!document.body.classList.container("dark")){
        document.body.classList.add("dark");
    }
}


toggle_btn.addEventListener("click",() => {
    changeTheme();
});




