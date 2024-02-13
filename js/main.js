console.log(`
   _    _  ______  _       _       ____  
  | |  | ||  ____|| |     | |     / __ \\ 
  | |__| || |__   | |     | |    | |  | |
  |  __  ||  __|  | |     | |    | |  | |
  | |  | || |____ | |____ | |____| |__| |
  |_|  |_||______||______||______|\\____/

`);



gsap.registerPlugin(ScrollTrigger);

// nav animations
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "nav",
    name: "fade",
    start: "top",
    end: "bottom center",
    scrub: 1.5,
    stagger: true
  },
});

tl.to(".nav_logo, .nav_socials", {
  opacity: 0,
  duration: 1,
});


//================================================== responsive nav
let btn = document.querySelector(".nav_btn .button");
let navcnt = document.querySelector(".responsive_nav");
let close = document.querySelector(".close");
let overlay = document.querySelector('.overlay');
let contact = document.querySelector('.contact');
let btn2 = document.querySelector('.btnc');
let btn3 = document.querySelector('.btncc');
let close2 = document.querySelector(".close2");


btn.onclick = function () {
  navcnt.classList.add("active");
  overlay.classList.add("active");
};

close.onclick = function () {
  navcnt.classList.remove("active");
  overlay.classList.remove("active");
};

overlay.onclick = function () {
  navcnt.classList.remove("active");
  overlay.classList.remove("active");
}

btn2.onclick = function () {
  contact.classList.add("active");
  navcnt.classList.remove("active");
  overlay.classList.remove("active");
}

close2.onclick = function () {
  contact.classList.remove("active");
};

btn3.onclick = function () {
  contact.classList.add("active");
}

//================================================== Cursor

var circle = document.querySelector("#cursor");
var frames = document.querySelectorAll("#frame");
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: .1,
    ease: Expo
  })
})

frames.forEach(frame => {
  frame.addEventListener("mousemove", function () {
    gsap.to(circle, {
      scale: 7,
      opacity: .2,
      duration: .2
    })
  })

  frame.addEventListener("mouseleave", function () {
    gsap.to(circle, {
      scale: 1,
      opacity: 1
    })
  })
})


//================================================== Loader
var tl3 = gsap.timeline();
tl3.from("#loader .heading h1", {
  y: "100%",
  duration: 1,
  ease: Circ.easeInOut
})

  .to("#loader .heading h1", {
    y: "-105%",
    duration: 1,
    delay: .5,
    ease: Circ.easeInOut
  })

  .to("#loader", {
    y: "-110%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut
  })

  .to("#loader_overlay", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -1.2,
    ease: Circ.easeInOut
  })

  .to("#loader_overlay", {
    height: "0%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
  });

document.getElementById('btn_send_contact').addEventListener('click', function() {
  try {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let subject = document.querySelector('input[name="subject"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    let url = 'https://script.google.com/macros/s/AKfycbzuQne34kGt5SFjHeyEWhj0EgZ8PBQYKbgm6y6ZxztOzXYQ90IH3H3deIE1upefrZPA/exec';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
      })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
  } catch (e) {
    console.log(e);
  }
});
