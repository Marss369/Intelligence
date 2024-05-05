window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

const mainMenu = document.querySelector("#menu");
const toggleMenu = document.querySelector("#toggle-menu");
const toggleMenuBtn = document.getElementById("menu-toggle-btn");

// const toggleTheme = document.querySelector("#theme-btn");
const toggleThemeBtn = document.getElementById("theme-btn");
// console.log(toggleMenuBtn);

toggleMenuBtn.addEventListener("click", () => {

    if (toggleMenu.classList.contains("show")) {

        toggleMenu.classList.remove("show");
        toggleMenuBtn.querySelector("i").classList.add("fa-bars");
        toggleMenuBtn.querySelector("i").classList.remove("fa-xmark");

    } else {

        toggleMenu.classList.add("show");
        toggleMenuBtn.querySelector("i").classList.remove("fa-bars");
        toggleMenuBtn.querySelector("i").classList.add("fa-xmark");

    }
})


toggleThemeBtn.addEventListener("click", () => {

    if (document.body.classList.contains("dark")) {

        document.body.classList.remove("dark");

        toggleThemeBtn.querySelector("i").classList.remove("fa-sun");
        toggleThemeBtn.querySelector("i").classList.add("fa-moon");

    } else {

        document.body.classList.add("dark");

        toggleThemeBtn.querySelector("i").classList.add("fa-sun");
        toggleThemeBtn.querySelector("i").classList.remove("fa-moon");

    }

})


const mainMenuLiElem = mainMenu.querySelectorAll("li");
// console.log(menuLiElem);

mainMenuLiElem.forEach((singleLiElem) => {

    singleLiElem.addEventListener("click", () => {

        mainMenuLiElem.forEach((oneLiElem) => {
            oneLiElem.classList.remove("active");
        })

        singleLiElem.classList.add("active");
    })


})



const toggleMenuLiElem = toggleMenu.querySelectorAll("li");
// console.log(menuLiElem);

toggleMenuLiElem.forEach((singleLiElem) => {

    singleLiElem.addEventListener("click", () => {

        toggleMenuLiElem.forEach((oneLiElem) => {
            oneLiElem.classList.remove("active");
        })

        singleLiElem.classList.add("active");
    })


})

// Scroll To Top

const toTopBtn = document.getElementById("to-top");

window.addEventListener("scroll", () => {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
})

if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}


// Counter 1

const countSec = document.getElementById("count");

if (countSec) {

    const countObserver = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            const counters1 = document.querySelectorAll(".counter-1");

            counters1.forEach((sinCounter1) => {

                let i = 0;

                const interval1 = setInterval(() => {

                    sinCounter1.innerText = ++i;

                    if (i == sinCounter1.dataset.stop1) {

                        clearInterval(interval1);

                    }

                }, 1);
            });

            countObserver.unobserve(entries[0].target);

        }

    }, { threshold: 0.5 })

    countObserver.observe(countSec);

}



//Counter 2

const abPgMoreInfo = document.querySelector(".ab-pg-more-info");

if (abPgMoreInfo) {

    const abPgObserver = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            const counters2 = document.querySelectorAll(".counter-2");

            function counter2Start(count_num, count_time) {

                let i = 0;

                const interval2 = setInterval(() => {

                    count_num.innerText = ++i;

                    if (i == count_num.dataset.stop2) {
                        clearInterval(interval2);
                    }

                }, count_time);

            }

            counter2Start(counters2[0], 1);
            counter2Start(counters2[1], 400);


            abPgObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });

    abPgObserver.observe(abPgMoreInfo);

}



// About Page Progress Bar

const usProgress = document.querySelector(".us-progress");

if (usProgress) {

    function abPageProgress() {
        const progressLabels = document.querySelectorAll(".progress-label");
        const progress = document.querySelectorAll(".progress");


        progressLabels.forEach((sinProLabel) => {

            let proWidth = sinProLabel.dataset.prolabel;
            sinProLabel.style.width = proWidth;

        });

        progress.forEach((sinProgress) => {

            let sinProWidth = sinProgress.dataset.progress;
            sinProgress.style.width = sinProWidth;

        })
    };

    abPageProgress();

}
