// src/main.js
import './assets/js/script.js';
import './assets/js/calculator.js';
import './assets/js/graph.js';

// main.js or index.js
import Lenis from '@studio-freight/lenis'

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2, // scroll duration (seconds)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
  orientation: 'vertical', // vertical or horizontal
  gestureOrientation: 'vertical', // gesture orientation
  smoothWheel: true, // enable smooth wheel scrolling
  smoothTouch: false, // enable smooth touch scrolling
  touchMultiplier: 2, // touch multiplier
  infinite: false, // infinite scrolling
})

// Animation frame loop for smooth scrolling
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Optional: Sync with scroll events if needed
lenis.on('scroll', (e) => {
  console.log(e)
})