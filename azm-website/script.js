document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".volunteer-btn");

if (loginButton) {

    loginButton.addEventListener("mouseenter", function () {

        let menu = document.querySelector(".login-dropdown");

        if (menu) return;

        menu = document.createElement("div");
        menu.className = "login-dropdown";

        menu.innerHTML = `
            <a href="#">تسجيل حساب جديد</a>
            <a href="#">تسجيل الدخول</a>
        `;

        document.body.appendChild(menu);

        const position = loginButton.getBoundingClientRect();

        menu.style.cssText = `
            position: fixed;
            top: ${position.bottom + 5}px;
            right: ${window.innerWidth - position.right}px;
            width: 180px;
            background: white;
            padding: 10px 0;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,.15);
            z-index: 99999;
            direction: rtl;
        `;

        menu.querySelectorAll("a").forEach(function (link) {

            link.style.cssText = `
                display: block;
                padding: 12px 20px;
                color: #333;
                text-decoration: none;
                font-size: 15px;
            `;

        });

        menu.addEventListener("mouseenter", function () {
            clearTimeout(menu.closeTimer);
        });

        menu.addEventListener("mouseleave", function () {
            menu.remove();
        });

    });

    loginButton.addEventListener("mouseleave", function () {

        const menu = document.querySelector(".login-dropdown");

        if (menu) {
            menu.closeTimer = setTimeout(function () {
                menu.remove();
            }, 250);
        }

    });

}
const initiativesLink = document.querySelector('.nav-links a[href="initiatives.html"]');

if (initiativesLink) {

    initiativesLink.addEventListener("mouseenter", function () {

        let menu = document.querySelector(".initiatives-dropdown");

        if (menu) return;

        menu = document.createElement("div");
        menu.className = "initiatives-dropdown";

        menu.innerHTML = `
            <a href="volunteer.html">تطوع معنا</a>
            <a href="#">طلب توظيف</a>
        `;

        document.body.appendChild(menu);

        const position = initiativesLink.getBoundingClientRect();

        menu.style.cssText = `
            position: fixed;
            top: ${position.bottom + 5}px;
            right: ${window.innerWidth - position.right}px;
            width: 180px;
            background: white;
            padding: 10px 0;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,.15);
            z-index: 99999;
            direction: rtl;
        `;

        menu.querySelectorAll("a").forEach(function (link) {
            link.style.cssText = `
                display: block;
                padding: 12px 20px;
                color: #333;
                text-decoration: none;
                font-size: 15px;
            `;
        });

        menu.addEventListener("mouseenter", function () {
            clearTimeout(menu.closeTimer);
        });

        menu.addEventListener("mouseleave", function () {
            menu.remove();
        });

    });

    initiativesLink.addEventListener("mouseleave", function () {

        const menu = document.querySelector(".initiatives-dropdown");

        if (menu) {
            menu.closeTimer = setTimeout(function () {
                menu.remove();
            }, 250);
        }

    });

}
    
    const aboutLink = document.querySelector('.nav-links a[href="about.html"]');

    if (!aboutLink) return;

  aboutLink.addEventListener("mouseenter", function () {

    let menu = document.querySelector(".about-dropdown");

    if (menu) return;

    menu = document.createElement("div");
    menu.className = "about-dropdown";

    menu.innerHTML = `
        <a href="about.html">نبذة عنا</a>
        <a href="#">أعضاء الجمعية العمومية</a>
        <a href="#">أعضاء مجلس الإدارة</a>
        <a href="#">فريق العمل</a>
    `;

    document.body.appendChild(menu);

    const position = aboutLink.getBoundingClientRect();

    menu.style.cssText = `
        position: fixed;
        top: ${position.bottom + 5}px;
        right: ${window.innerWidth - position.right}px;
        width: 230px;
        background: white;
        padding: 10px 0;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,.15);
        z-index: 99999;
        direction: rtl;
    `;

    menu.querySelectorAll("a").forEach(function (link) {
        link.style.cssText = `
            display: block;
            padding: 12px 20px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
        `;
    });

    menu.addEventListener("mouseenter", function () {
        clearTimeout(menu.closeTimer);
    });

    menu.addEventListener("mouseleave", function () {
        menu.remove();
    });

});

aboutLink.addEventListener("mouseleave", function () {

    const menu = document.querySelector(".about-dropdown");

    if (menu) {
        menu.closeTimer = setTimeout(function () {
            menu.remove();
        }, 250);
    }

});

});
       
       menu.querySelectorAll("a").forEach(function (link) {
            link.style.cssText = `
                display: block;
                padding: 12px 20px;
                color: #333;
                text-decoration: none;
                font-size: 15px;
            `;
        });

/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


menuToggle.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");


    const icon =
        menuToggle.querySelector("i");


    if (mobileMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =========================================
   CLOSE MOBILE MENU
========================================= */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        mobileMenu.classList.remove("active");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =========================================
   ACTIVE NAV LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    alert(
        "تم استلام رسالتك بنجاح، شكرًا لتواصلك مع جمعية عزم التعليمية 🤍"
    );


    contactForm.reset();

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".info-card, .goal-card, .program-card, .news-card, .stat"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function(element) {

    observer.observe(element);

});

// القائمة المنسدلة عن الجمعية



const initiativesLink = document.querySelector('.nav-links a[href="initiatives.html"]');

initiativesLink.addEventListener("mouseenter", function () {

    let menu = document.querySelector(".initiatives-dropdown");

    if (menu) return;

    menu = document.createElement("div");
    menu.className = "initiatives-dropdown";

    menu.innerHTML = `
        <a href="volunteer.html">تطوع معنا</a>
        <a href="#">طلب توظيف</a>
    `;

    document.body.appendChild(menu);

    const position = initiativesLink.getBoundingClientRect();

    menu.style.cssText = `
        position: fixed;
        top: ${position.bottom + 5}px;
        right: ${window.innerWidth - position.right}px;
        width: 180px;
        background: white;
        padding: 10px 0;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,.15);
        z-index: 99999;
        direction: rtl;
    `;

    menu.querySelectorAll("a").forEach(function (link) {
        link.style.cssText = `
            display: block;
            padding: 12px 20px;
            color: #333;
            text-decoration: none;
            font-size: 15px;
        `;
    });

    menu.addEventListener("mouseenter", function () {
        clearTimeout(menu.closeTimer);
    });

    menu.addEventListener("mouseleave", function () {
        menu.remove();
    });

});

initiativesLink.addEventListener("mouseleave", function () {

    const menu = document.querySelector(".initiatives-dropdown");

    if (menu) {
        menu.closeTimer = setTimeout(function () {
            menu.remove();
        }, 250);
    }

})