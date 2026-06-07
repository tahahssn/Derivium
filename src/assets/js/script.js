import { gsap } from "gsap"
import { initCalculator } from "./calculator.js";
import { initGraphUI } from "./graph.js";

document.addEventListener("DOMContentLoaded", () => {
  initGraphUI();
});

// CALCULATOR.JS INTEGRATION IN SCRIPT JS 
document.addEventListener("DOMContentLoaded", () => {
  initCalculator();
  initGraphUI();
});
