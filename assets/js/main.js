/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(" .projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerview: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactProject = document.getElementById('contact-project'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //check if the field has a value
    if (contactName.value === '' || contactEmail.value ==='' || contactProject.value ===''){
        // Add and remove colors
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show the message
        contactMessage.textContent = 'Write all the input fields 📨' 

    } else {
       // serviceID - templateID - #form - publicKey
emailjs.sendForm('service_wtujr1c', 'template_ikwbglg', '#contact-form', 'WgwuxAf0xkdArAmhp')
.then(() => {
    // show the message and add color
    contactMessage.classList.add('color-blue');
    contactMessage.textContent = 'Message Sent ✅';

    // Remove the message after five seconds
    setTimeout(() => {
        contactMessage.textContent = '';
    }, 5000);
})
.catch((error) => {
    console.error('Error sending email:', error);
});

//To clean the input field
contactName.value = ''
contactEmail.value = ''
contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail) 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== EMOTIONAL EMOJI ANIMATION ===============*/
let states = {
  neutral: { //Post your other emotions as a comment
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:0,
              position:0
          }
      },
      right: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:0,
              position:0
          }
      }
  },
  happy: {
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:20,
              position:40
          },
          upper:{
              rotation:0,
              position:0
          }
      },
      right: {
          lower:{
              rotation:-20,
              position:40
          },
          upper:{
              rotation:0,
              position:0
          }
      }
  },
  sad: {
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:-20,
              position:40
          }
      },
      right: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:20,
              position:40
          }
      }
  },
  close: {
      face: {
          rotationX:-20,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:0,
              position:45
          },
          upper:{
              rotation:0,
              position:45
          }
      },
      right: {
          lower:{
              rotation:0,
              position:45
          },
          upper:{
              rotation:0,
              position:45
          }
      }
  },
  angry: {
      face: {
          rotationX:-10,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:20,
              position:40
          }
      },
      right: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:-20,
              position:40
          }
      }
  },
  confused: {
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:0,
              position:40
          }
      },
      right: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:0,
              position:0
          }
      }
  },
  suspicious: {
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:-4,
              position:20
          },
          upper:{
              rotation:4,
              position:20
          }
      },
      right: {
          lower:{
              rotation:4,
              position:20
          },
          upper:{
              rotation:-4,
              position:20
          }
      }
  },
  pain: {
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:10,
              position:20
          },
          upper:{
              rotation:-10,
              position:20
          }
      },
      right: {
          lower:{
              rotation:-10,
              position:20
          },
          upper:{
              rotation:10,
              position:20
          }
      }
  },
  unamused: {
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:0
      },
      left: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:0,
              position:40
          }
      },
      right: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:0,
              position:40
          }
      }
  },
  unsure: {
      face: {
          rotationX:0,
          rotationY:0,
          rotationZ:7
      },
      left: {
          lower:{
              rotation:10,
              position:20
          },
          upper:{
              rotation:-10,
              position:20
          }
      },
      right: {
          lower:{
              rotation:0,
              position:0
          },
          upper:{
              rotation:0,
              position:0
          }
      }
  }
}

const setState = state => {
  if (states[state] == undefined) return;
  document.querySelector(".face").style.cssText = `
    --left-lower-rotation: ${states[state].left.lower.rotation}deg;
    --left-lower-position: ${states[state].left.lower.position}%;
    --left-upper-rotation: ${states[state].left.upper.rotation}deg;
    --left-upper-position: ${states[state].left.upper.position}%;
    --right-lower-rotation: ${states[state].right.lower.rotation}deg;
    --right-lower-position: ${states[state].right.lower.position}%;
    --right-upper-rotation: ${states[state].right.upper.rotation}deg;
    --right-upper-position: ${states[state].right.upper.position}%;
    --face-rotation-x: ${states[state].face.rotationX}deg;
    --face-rotation-y: ${states[state].face.rotationY}deg;
    --face-rotation-z: ${states[state].face.rotationZ}deg;
  `;
};

let emotions = Object.keys(states);
let previous = ["happy"];
setState("happy");

const nextState = () => {
  let ind = Math.floor(Math.random() * emotions.length);
  if (previous.includes(emotions[ind])) return nextState();
  previous.push(emotions[ind]);
  previous = previous.slice(-4); // Save most recent 4 states to not use
  return ind;
};

setInterval(() => {
  setState(emotions[nextState()]);
}, 1500);
   

gsap.from(".box__medium", { opacity: 0, duration: 1.5, delay: 1.3, y: -50 });
gsap.from(".box__small", { opacity: -1, duration: 1.5, delay: 1.4, y: -50 });
