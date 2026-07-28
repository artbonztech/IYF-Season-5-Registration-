/* ==========================================
   DARK MODE TOGGLE
========================================== */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = darkModeBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

/* ==========================================
   LOAD SAVED THEME
========================================== */

window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
        topBtn.style.justifyContent = "center";
        topBtn.style.alignItems = "center";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
   SMOOTH NAVIGATION
========================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* ==========================================
   FORM VALIDATION
========================================== */

const form = document.getElementById("registrationForm");


document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let county = document.getElementById("county").value;
    let areaofresidence = document.getElementById("residence").value;
    let course = document.getElementById("course").value;
    let status = document.getElementById("studentstatus").value;
    let guardian = document.getElementById("guardianname").value;
    let guardianPhone = document.getElementById("guardianphone").value;
    let referral = document.getElementById("referral").value;
    let reason = document.getElementById("reason").value;

    let message =
`*NEW IYF SSN 5 WE CAN ACADEMY REGISTRATION*

Full Name: ${fullname}

Gender: ${gender}

Date of Birth: ${dob}

Phone: ${phone}

Email: ${email}

County: ${county}

Area of Residence: ${areaofresidence}

Course: ${course}

Student Status: ${status}

Guardian: ${guardian}

Guardian Phone: ${guardianPhone}

Referral: ${referral}

Reason:
${reason}`;

    let whatsappURL =
"https://wa.me/254728365102?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});

/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".course-card,.form-section,.contact-box").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".8s";

    observer.observe(el);

});

/* ==========================================
   HEADER SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="0 8px 20px rgba(0,0,0,.1)";

    }

});

/* ==========================================
   CURRENT YEAR IN FOOTER (Optional)
========================================== */

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} IYF WE CAN Academy. All Rights Reserved.`;

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function(){

    navbar.classList.toggle("active");

});