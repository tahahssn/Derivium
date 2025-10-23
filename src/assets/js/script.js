import { gsap } from "gsap"
import LocomotiveScroll from 'locomotive-scroll';
import { initCalculator } from "./calculator.js";
import { initGraphUI } from "./graph.js";

document.addEventListener("DOMContentLoaded", () => {
  initGraphUI();
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobile =
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 1024;

  if (isMobile) {
    // Create warning overlay
    const warning = document.createElement("div");
    warning.id = "device-warning";
    warning.innerHTML = `
      <div class="warning-box">
        <h2>⚠️ Desktop Recommended</h2>
        <p>This site is best viewed on a laptop or desktop for full functionality.</p>
        <button id="continue-anyway">Continue Anyway</button>
      </div>
    `;

    document.body.appendChild(warning);

    // Hide all content except warning
    const allContent = Array.from(document.body.children).filter(
      (el) => el.id !== "device-warning"
    );
    allContent.forEach((el) => (el.style.display = "none"));

    // Continue Anyway Button
    document
      .getElementById("continue-anyway")
      .addEventListener("click", () => {
        warning.remove();
        allContent.forEach((el) => (el.style.display = ""));
      });

    // Force show warning now
    setTimeout(() => {
      warning.style.display = "flex";
    }, 100);
  }
});

// CALCULATOR.JS INTEGRATION IN SCRIPT JS 
document.addEventListener("DOMContentLoaded", () => {
  initCalculator();
  initGraphUI();
});

// LOCOMOTIVE SCROLL IN WHOLE WEBSITE
const locomotiveScroll = new LocomotiveScroll();

// SMOOTH SCROLL TO CALCULATOR ON PRESSING BUTTON IN OUT TOOLS SECTION
// document.querySelectorAll('a[href^="#calc-sec"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault(); // Prevent default instant jump
//     const targetId = this.getAttribute('href').substring(1); // Get section ID (without #)
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
//     }
//   });
// });

// GSAP MUST BE LOADED BEFORE THIS SCRIPT
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// FEATURES/SUPPORTERS/TEAM HEADING + PARAGRAPH SPLIT
const splitHeading = new SplitText(".features-title", { type: "words,chars" });
const suppoterSplitHeading = new SplitText(".marquee_header", { type: "words,chars" });
const toolSplitHeading = new SplitText(".tool-tagline", { type: "words,chars" });
const splitPara = new SplitText(".features-sub", { type: "words" });
const splitTeamTitle = new SplitText(".team-title", { type: "words,chars" });
const splitTeamPara = new SplitText(".team-desc", { type: "words" });

// FEATURES ANIMATION
gsap.from(splitHeading.chars, {
  scrollTrigger: {
    trigger: ".features-title",
    start: "top 80%",   // jab heading viewport ke andar aa jaye
    end: "bottom 60%",
    scrub: 1,
    // pin: true,   // agar sticky chahiye toh enable kar
  },
  opacity: 0,
  y: 40,
  duration: 1.2,
  stagger: 0.05,
  ease: "power3.out"
});

gsap.from(splitPara.words, {
  scrollTrigger: {
    trigger: ".features-sub",
    start: "top 85%",
    end: "bottom 70%",
    scrub: 1,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

gsap.from(".cards-grid", {
  scrollTrigger: {
    trigger: ".card-effect",
    start: "top 85%",
    end: "bottom 70%",
    scrub: 1,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

// TOOLS HEADING ANIMATION
gsap.from(toolSplitHeading.chars, {
  scrollTrigger: {
    trigger: ".tool-tagline",
    start: "top 80%",   // jab heading viewport ke andar aa jaye
    end: "bottom 60%",
    scrub: 1,
    // pin: true,   // agar sticky chahiye toh enable kar
  },
  opacity: 0,
  y: 40,
  duration: 1.2,
  stagger: 0.05,
  ease: "power3.out"
});

// TOOLS CARD ANIMATION
gsap.from(".card-container", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 85%",
    end: "bottom 70%",
    scrub: 1,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

// TOOLS HEADING ANIMATION
gsap.from(splitTeamTitle.chars, {
  scrollTrigger: {
    trigger: ".team-title",
    start: "top 80%",   // jab heading viewport ke andar aa jaye
    end: "bottom 60%",
    scrub: 1,
    // pin: true,   // agar sticky chahiye toh enable kar
  },
  opacity: 0,
  y: 40,
  duration: 1.2,
  stagger: 0.05,
  ease: "power3.out"
});

gsap.from(splitTeamPara.words, {
  scrollTrigger: {
    trigger: ".team-desc",
    start: "top 80%",   // jab heading viewport ke andar aa jaye
    end: "bottom 60%",
    scrub: 1,
    // pin: true,   // agar sticky chahiye toh enable kar
  },
  opacity: 0,
  y: 40,
  duration: 1.2,
  stagger: 0.05,
  ease: "power3.out"
});

// TEAMS CARD ANIMATION
gsap.from(".team-container", {
  scrollTrigger: {
    trigger: ".team-card",
    start: "top 85%",
    end: "bottom 70%",
    scrub: 1,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

//FOOTER ANIMATION
gsap.from(".footer-social", {
  scrollTrigger: {
    trigger: ".social-btn",
    start: "top 95%",
    end: "bottom 90%",
    scrub: 1,
    //markers: true,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

gsap.from(".footer-bottom", {
  scrollTrigger: {
    trigger: ".social-btn",
    start: "top 95%",
    end: "bottom 90%",
    scrub: 1,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

gsap.from(".footer-top", {
  scrollTrigger: {
    trigger: ".footer-tagline",
    start: "top 95%",
    end: "bottom 90%",
    scrub: 1,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

// ABOUT ANIMATION 
gsap.from(".aboutbutton", {
  scrollTrigger: {
    trigger: ".about-btn",
    start: "top 100%",
    end: "bottom 70%",
    scrub: 1,
  },
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.03,
  ease: "power2.out"
});

// SUPPORTER ANIMATION
gsap.from(suppoterSplitHeading.chars, {
  scrollTrigger: {
    trigger: ".marquee_header",
    start: "top 80%",   // jab heading viewport ke andar aa jaye
    end: "bottom 60%",
    scrub: 1,
    // pin: true,   // agar sticky chahiye toh enable kar
  },
  opacity: 0,
  y: 40,
  duration: 1.2,
  stagger: 0.05,
  ease: "power3.out"
});

// Split text into letters
// Split letters for heading & tagline
document.querySelectorAll('.split-text').forEach(el => {
  el.innerHTML = el.textContent.replace(/\S/g, "<span>$&</span>");
});

// HERO HEADING ANIMATION (MAIN + ABOUT)
gsap.from('.split-text span', {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.05,
  ease: "power1.in"
});

// HERO PARAGRAPH ANIMATION (MAIN + ABOUT)
gsap.to('.desc', {
  duration: 1,
  opacity: 1,
  y: 0,
  delay: 1,
  ease: "power2.out"
});

//NAVBAR ANIMATION
gsap.from('.navbar', {
  duration: 1.5,
  opacity: 0,
  y: -400,
  stagger: 0.05,
  ease: "power3.out"
})

gsap.to('.navbar', {
  duration: 1.5,
  opacity: 1,
  y: 0,
  stagger: 0.05,
  ease: "power3.out"
})

gsap.to('.custom-btn', {
  duration: 1,
  opacity: 1,
  y: 10,
  delay: 1.5,
  ease: "power2.out"
})

gsap.to('.container', {
  duration: 1,
  opacity: 1,
  y: 10,
  delay: 1.5,
  ease: "power2.out"
})

// Split text into letters
// Split letters for heading & tagline
document.querySelectorAll('.splitgettagline').forEach(el => {
  el.innerHTML = el.textContent.replace(/\S/g, "<span>$&</span>");
});

// GET STARTED HERO HEADING ANIMATION
gsap.from('.splitgettagline span', {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.05,
  ease: "power2.in"
});

// GET STARTED HERO PARAGRAPH ANIMATION
gsap.from('.get-desc', {
  duration: 1,
  opacity: 0,
  y: 100,
  delay: 1,
  ease: "power2.out"
});

// GET STARTED SCROLL BUTTON ANIMATION
gsap.from('.scrolldown', {
  duration: 1,
  opacity: 0,
  x: -100,
  delay: 1.5,
  ease: "power2.out"
});

// SVG ANIMATIONS (LIMTS/DERIVATIVES/2D-GRAPHS/3D-GRAPHS + ABOUT HAMSTER WHEEL)
gsap.from('.svganimation', {
  duration: 1,
  opacity: 0,
  y: -100,
  delay: 1.2,
  ease: "power2.out"
});

// ANIMATED BACKGROUND FUNCTION 
function heroAnimation(){
  const canvas = document.getElementById('symbolCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {x: -1000, y: -1000};
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

// Math symbols
const icons = ["∑","∫","π","Δ","dx","f(x)","cos","sin","tan","∂","lim"];

// Grid spacing
const gridSpacing = 25; 
let symbols = [];

// Generate chessboard-like grid
for(let y=0; y<canvas.height; y+=gridSpacing){
  for(let x=0; x<canvas.width; x+=gridSpacing){
    symbols.push({
      x: x,
      y: y,
      char: icons[Math.floor(Math.random()*icons.length)],
      size: Math.random()*4 + 8, // 8-12px
      baseOpacity: 0.03, // 3%
    });
  }
}


// Draw loop with neon hover glow
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  symbols.forEach(s=>{
    const dx = mouse.x - s.x;
    const dy = mouse.y - s.y;
    const dist = Math.sqrt(dx*dx + dy*dy);

    if(dist < 100){ // hover effect radius
      const scale = 1 + (100 - dist)/150;
      const opacity = 0.15 + (100 - dist)/300; // moderate neon glow
      ctx.font = `${s.size*scale}px Arial`;
      ctx.fillStyle = `rgba(0,255,255,${opacity})`; // neon cyan
      ctx.shadowColor = 'rgba(0,255,255,0.7)';
      ctx.shadowBlur = 8;
      ctx.fillText(s.char, s.x, s.y);
    } else {
      ctx.font = `${s.size}px Arial`;
      ctx.fillStyle = `rgba(36, 36, 36, 0.34)`; // base 3%
      ctx.shadowBlur = 0;
      ctx.fillText(s.char, s.x, s.y);
    }
  });

  requestAnimationFrame(draw);
}

draw();

// Handle resize
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
}

// SCROLL ANIMATION ON GET STARTED PAGE
function scrollAnimation() {
  const scrollBtn = document.querySelector('.scrolldown');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }
}
// Call the function after DOM loads
document.addEventListener('DOMContentLoaded', scrollAnimation);

function createMarqueeAnimation(selector = ".marquee__inner", durations = [15, 18, 16, 20, 17, 19], gapWidth = 80) {
  // Loop through each marquee line
  document.querySelectorAll(selector).forEach((inner, index) => {
    const group = inner.querySelector(".marquee__group");
    if (!group) return; // Exit if no group found

    const direction = index % 2 === 0 ? -1 : 1; // Odd lines left, even lines right
    const duration = durations[index % durations.length]; // Cycle durations if fewer provided

    // Add gap element after the original group
    const gapElement = document.createElement("div");
    gapElement.className = "loop-gap";
    inner.appendChild(gapElement);

    // Calculate total width of the group including gap
    const groupWidth = group.offsetWidth + gapWidth;

    // Create enough clones to fill at least twice the viewport width
    const clonesNeeded = Math.ceil(window.innerWidth / groupWidth) * 2;
    for (let i = 0; i < clonesNeeded; i++) {
      const clone = group.cloneNode(true);
      inner.appendChild(clone);
      const cloneGap = document.createElement("div");
      cloneGap.className = "loop-gap";
      inner.appendChild(cloneGap);
    }

    // Set initial position
    gsap.set(inner, { x: direction === 1 ? -groupWidth : 0 });

    // GSAP animation for seamless infinite loop
    gsap.to(inner, {
      x: `+=${direction * groupWidth * clonesNeeded}`, // Move by total width of all clones
      duration: duration * clonesNeeded, // Scale duration for longer travel
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          x = parseFloat(x);
          // Seamless loop using wrap
          return gsap.utils.wrap(-groupWidth * clonesNeeded, 0, x);
        }, "px")
      }
    });
  });
}



// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createMarqueeAnimation(".marquee__inner", [15, 18, 16, 20, 17, 19], 80); // 80px gap
});

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createMarqueeAnimation();
});

heroAnimation();
scrollAnimation();
supporterMarqueeAnimation();