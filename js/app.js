/* --------------- Grab elements from DOM --------------- */
const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ms_section = document.querySelector(".milestones");
const ms_counters = document.querySelectorAll(".number span");

window.addEventListener("scroll", () => {
    if (!skillsPlayed) skillscounter();
    if (!msPlayed) ml_counter();
})

function updatecount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updatecount(num, maxNum);
        }, 12);
    }
}
/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 100);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
/* --------------- Reveal Animation --------------- */
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
})
sr.reveal(".showcase-info", { delay: 500 });
sr.reveal(".showcase-image", { origin: "top", delay: 600 });
sr.reveal(".about-grid", { origin: "top", delay: 100 });
sr.reveal(".about-info", { delay: 200 });
sr.reveal(".triangle", { delay: 200 });
sr.reveal(".box-heading", { delay: 50 });
sr.reveal(".services-grid", { origin: "top", delay: 50 });
sr.reveal(".services .sub-heading", { delay: 50 });
sr.reveal(".services .heading", { delay: 50 });
sr.reveal(".services .text", { delay: 50 });
/* --------------- Skills Progress Bar Animation --------------- */
function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

let skillsPlayed = false;

function skillscounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counter.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updatecount(counter, target);
        }, 400);
    });
    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}
/* --------------- Services Counter Animation --------------- */
let msPlayed = false;

function ml_counter() {
    if (!hasReached(ms_section)) return;
    msPlayed = true;

    ms_counters.forEach(ctr => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            updatecount(ctr, target);
        }, 500);
    })
}

// modal
const modals = document.querySelectorAll('.modal');
const modalTitle = document.querySelector('.modal-header h1');
const modalBody = document.querySelector('.modal-body ul');
const closeBtns = document.querySelectorAll('.modal-header button');
const openBtns = document.querySelectorAll('.viewMore')

function closeModals() {
    modals.forEach((modal) => modal.classList.remove('toggleModal'))
}

closeBtns.forEach((btn, idx) =>
    btn.addEventListener('click', () => {
        closeModals()
        modals[idx].classList.remove('toggleModal')
    }))


openBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        closeModals()
        modals[idx].classList.add('toggleModal')
    })
})



/* --------------- Portfolio Filter Animation --------------- */
let mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.prt-card',
    },
    animation: {
        duration: 500,
    },
});

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */