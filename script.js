// menu toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //*active sections for animation on scroll*//
            sec.classList.add('show-animate');
        }
        //*if want to use animation that repeats an scroll use this
        else {
            sec.classList.remove('show-animate');
        }    
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toogle icon and navbar when click navbar links (scroll)//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}// EmailJS init
(function () {
  emailjs.init("mlytJ6amAk3uiH7z2");
})();

// Form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Working ✅");

  emailjs.sendForm("service_8nu577s", "template_y544jn3", this)
    .then(function () {
      alert("Message Sent ✅");
    })
    .catch(function (error) {
      console.log(error);
      alert("Error ❌");
    });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  console.log("NAME:", formData.get("name"));
  console.log("EMAIL:", formData.get("email"));
  console.log("PHONE:", formData.get("phone"));
  console.log("MESSAGE:", formData.get("message"));
});