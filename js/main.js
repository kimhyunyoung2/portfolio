console.log(`
   _    _  ______  _       _       ____  
  | |  | ||  ____|| |     | |     / __ \\ 
  | |__| || |__   | |     | |    | |  | |
  |  __  ||  __|  | |     | |    | |  | |
  | |  | || |____ | |____ | |____| |__| |
  |_|  |_||______||______||______|\\____/
  김현영의 포트폴리오에 오신걸 환영합니다!
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
    delay: -.4,
    ease: Circ.easeInOut
  })

  .to("#loader", {
    y: "-110%",
    duration: 1,
    delay: -1,
    ease: Circ.easeInOut
  })

  .to("#loader_overlay", {
    height: "100%",
    top: 0,
    duration: .05,
    delay: -5,
    ease: Circ.easeInOut
  })

  .to("#loader_overlay", {
    height: "0%",
    duration: .5 ,
    delay: -.25,
    ease: Circ.easeInOut,
  });

document.getElementById('btn_send_contact').addEventListener('click', function() {
  try {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let subject = document.querySelector('input[name="subject"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (!name) {
      alert('이름을 입력해주세요.');
    }
    else if (!email) {
      alert('이메일을 입력해주세요.');
    }
    else if (!subject) {
      alert('제목을 입력해주세요.');
    }
    else if (!message) {
      alert('내용을 입력해주세요.');
    }
    else {
      let url = 'https://script.google.com/macros/s/AKfycbzgynKtLrvGW-YM1JCa78TQ0lS6h0fbzgm3uJ97VB2jxDqN4kzG0bDT2pCnPzY8M6Va/exec';
      let formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);

      fetch(url, {
        method: 'POST',
        body: formData
      })
          .then(response => response.json())
          .then(function(data) {
            try {
              if (data.result === 'success') {
                alert('등록이 완료됐습니다.');
                // name, email, subject, message 값 비워주기
                document.querySelector('input[name="name"]').value = '';
                document.querySelector('input[name="email"]').value = '';
                document.querySelector('input[name="subject"]').value = '';
                document.querySelector('textarea[name="message"]').value = '';
              }
            } catch (e) {
              console.log(e);
            }
          })
          .catch((error) => console.error('Error:', error));
    }
  } catch (e) {
    console.log(e);
  }
});

