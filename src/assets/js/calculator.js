import { fetchResult } from "../api/calculatorapi.js";
import katex from "katex";
import "katex/dist/katex.min.css";

export function initCalculator() {
  const modeSelect = document.getElementById("calc-mode");
  const title = document.getElementById("calc-title");
  const desc = document.getElementById("calc-desc");
  const pointField = document.getElementById("point-field");
  const calcBtn = document.getElementById("calc-btn");
  const loader = document.getElementById("loader");
  const output = document.getElementById("katex-output");
  const eqInput = document.getElementById("calc-equation");
  const varInput = document.getElementById("calc-variable");
  const varField = varInput?.closest(".code-editor");
  const pointInput = document.getElementById("calc-point");
  const expandBtn = document.getElementById("expand-btn");
  const modal = document.getElementById("result-modal");
  const closeModal = document.getElementById("close-modal");
  const modalOutput = document.getElementById("modal-output");

  // Inside successful render block (where KaTeX renders)
  expandBtn.style.display = "inline-block";

  // Expand logic
  expandBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalOutput.innerHTML = output.innerHTML;
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });


  if (!modeSelect || !calcBtn) {
    console.error("Calculator elements not found in DOM!");
    return;
  }

  // Smooth fade function
  const fadeContent = (element, newText, duration = 300) => {
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = 0;
    setTimeout(() => {
      element.textContent = newText;
      element.style.opacity = 1;
    }, duration);
  };

  // Input fade toggle
  const fadeToggle = (el, show, duration = 400) => {
    el.style.transition = `opacity ${duration}ms ease, height ${duration}ms ease`;
    el.style.overflow = "hidden";
    if (show) {
      el.style.display = "block";
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.height = el.scrollHeight + "px";
      }, 50);
    } else {
      el.style.opacity = 0;
      el.style.height = "0";
      setTimeout(() => (el.style.display = "none"), duration);
    }
  };

  // Mode change handling (with animation)
  modeSelect.addEventListener("change", () => {
    const mode = modeSelect.value;

    if (mode === "limit") {
      fadeContent(title, "Limit Calculator");
      fadeContent(
        desc,
        "Calculate the limit of a function as the variable approaches a given point."
      );
      fadeToggle(varField, true);
      fadeToggle(pointField, true);
    } else if (mode === "derivative") {
      fadeContent(title, "Derivative Calculator");
      fadeContent(
        desc,
        "Find the first derivative of a function with respect to a variable."
      );
      fadeToggle(varField, true);
      fadeToggle(pointField, false);
    } else if (mode === "partial") {
      fadeContent(title, "Partial Derivative Calculator");
      fadeContent(
        desc,
        "Compute the partial derivative of a multivariable function with respect to one variable."
      );
      fadeToggle(varField, true);
      fadeToggle(pointField, false);
    } else if (mode === "total") {
      fadeContent(title, "Total Derivative Calculator");
      fadeContent(
        desc,
        "Find the total derivative of a function involving multiple interdependent variables."
      );
      fadeToggle(varField, false);
      fadeToggle(pointField, false);
    }
  });

  // Calculate button logic
  calcBtn.addEventListener("click", async () => {
    const mode = modeSelect.value;
    const equation = eqInput.value.trim();
    const variable = varInput?.value?.trim() || "";
    const point = pointInput.value.trim();

    if (!equation || (mode === "limit" && !point)) {
      alert("Please fill all required fields!");
      return;
    }

    loader.style.display = "flex";
    output.style.display = "none";

    const start = Date.now();
    try {
      const data = await fetchResult(mode, equation, variable, point);
      const elapsed = Date.now() - start;
      const delay = Math.max(0, 2000 - elapsed);

      setTimeout(() => {
        loader.style.display = "none";
        output.style.display = "block";
        output.style.opacity = 0;

        if (data.latex) {
          katex.render(data.latex, output, {
            throwOnError: false,
            displayMode: true,
          });
        } else {
          output.innerHTML = "No valid output from API.";
        }

        // fade in output
        output.style.transition = "opacity 400ms ease";
        setTimeout(() => (output.style.opacity = 1), 50);

        reinitAnimations();
      }, delay);
    } catch (err) {
      loader.style.display = "none";
      output.style.display = "block";
      output.innerHTML = `Error: ${err.message}`;
    }
  });

  // Refresh global animations
  function reinitAnimations() {
    if (window.AOS) AOS.refresh();
    if (window.gsap && window.ScrollTrigger) window.ScrollTrigger.refresh();
  }
}
