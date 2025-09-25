import { gsap } from "gsap"
import * as THREE from 'three'
// GSAP must be loaded before this script

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// heading + paragraph split
const splitHeading = new SplitText(".abtheading", { type: "words,chars" });
const splitPara = new SplitText(".abtpara", { type: "words" });

// Heading animation
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

// Paragraph animation
gsap.from(splitPara.words, {
  scrollTrigger: {
    trigger: ".features-title",
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

// Split text into letters
// Split letters for heading & tagline
document.querySelectorAll('.split-text').forEach(el => {
  el.innerHTML = el.textContent.replace(/\S/g, "<span>$&</span>");
});

// Animate letters
gsap.from('.split-text span', {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.05,
  ease: "power3.out"
});

// Animate description fade-in
gsap.to('.desc', {
  duration: 1,
  opacity: 1,
  y: 0,
  delay: 1.5,
  ease: "power2.out"
});

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

heroAnimation();