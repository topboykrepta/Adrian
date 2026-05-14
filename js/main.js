const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

//Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

// Contact form submission
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (typeof emailjs === "undefined") {
      alert("Message service is not ready yet. Please reload the page and try again.");
      return;
    }

    const serviceID = "service_ahk757a";
    const templateID = "template_cg8uefw";

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
      }, (err) => {
        const message = err && err.text ? err.text : "Failed to send message. Please try again later.";
        alert(message);
        console.error("Error:", err);
      });
  });
});

// AOS animations settings
AOS.init({
  once: true,
});
