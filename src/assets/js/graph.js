import Plotly from "plotly.js-dist-min";
import { create, all } from "mathjs";
const math = create(all);

let useGrid = false;

function plotEquation() {
  const eqInput = document.getElementById("equation");
  if (!eqInput) return;

  const exprString = eqInput.value;
  let expr;

  try {
    expr = math.parse(exprString).compile();
  } catch {
    alert("Invalid equation! Please try again.");
    return;
  }

  const x = [], y = [];
  const range = 2, step = 0.1;

  for (let i = -range; i <= range; i += step) x.push(i);
  for (let j = -range; j <= range; j += step) y.push(j);

  const z = y.map(yi =>
    x.map(xi => {
      try {
        const val = expr.evaluate({ x: xi, y: yi });
        return isFinite(val) ? val : NaN;
      } catch {
        return NaN;
      }
    })
  );

  const data = [
    {
      type: "surface",
      z,
      colorscale: "Viridis",
      colorbar: {
        tickfont: { color: "#fff" },
        tickcolor: "#fff",
        title: { text: "Value", font: { color: "#fff" } },
        x: 1.08,
      },
    },
  ];

  const layout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    scene: {
      bgcolor: "rgba(0,0,0,0)",
      xaxis: { color: "#fff" },
      yaxis: { color: "#fff" },
      zaxis: { color: "#fff" },
    },
    margin: { l: 0, r: 0, b: 0, t: 0 },
  };

  Plotly.newPlot("plot", data, layout, { displayModeBar: false });

if (!document.querySelector(".features-toolbar")) {
  const toolbar = document.createElement("div");
  toolbar.classList.add("features-toolbar");
  toolbar.innerHTML = `
    <button id="download" title="Download PNG">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
      </svg>
    </button>
    <button id="zoom" title="Zoom">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </button>
    <button id="pan" title="Pan">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="2"/>
      </svg>
    </button>
    <button id="orbit" title="Orbital Rotation">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M2 12a10 4 0 0 1 20 0a10 4 0 0 1-20 0Z"/>
      </svg>
    </button>
    <button id="turntable" title="Turntable Rotation">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/>
      </svg>
    </button>
    <button id="resetDefault" title="Reset Camera">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="6" width="16" height="12" rx="2" ry="2"/>
            <circle cx="12" cy="12" r="2.5"/>
            <path d="M3 12a9 9 0 0 1 18 0"/>
            <polyline points="3 7 3 12 8 12"/>
        </svg>
    </button>
    <button id="resetLast" title="Last Saved Camera">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="7" width="14" height="10" rx="2" ry="2"/>
        <circle cx="12" cy="12" r="2.5"/>
        <path d="M16 3v2M8 3v2M12 20v1"/>
        <path d="M21 16l-1.5-1.5a2.5 2.5 0 1 0-3.5 3.5L21 16z"/>
    </svg>
    </button>
  `;
  
  document.getElementById("plot").appendChild(toolbar);

  const plotDiv = document.getElementById("plot");
  let lastCamera = null;
  let activeMode = null;

  plotDiv.on('plotly_relayout', (e) => {
    if (e["scene.camera"]) lastCamera = e["scene.camera"];
  });

  function deactivateAll() {
    document.querySelectorAll(".features-toolbar button").forEach(btn => btn.classList.remove("active"));
  }

  function activateMode(id, relayoutOptions) {
    deactivateAll();
    document.getElementById(id).classList.add("active");
    Plotly.relayout(plotDiv, relayoutOptions);
    activeMode = id;
  }

  document.getElementById("download").onclick = () => {
    deactivateAll();
    Plotly.downloadImage(plotDiv, { format: "png", filename: "3d-plot" });
  };
  document.getElementById("zoom").onclick = () => {
    if (activeMode === "zoom") { deactivateAll(); activeMode = null; }
    else activateMode("zoom", { dragmode: "zoom" });
  };
  document.getElementById("pan").onclick = () => {
    if (activeMode === "pan") { deactivateAll(); activeMode = null; }
    else activateMode("pan", { dragmode: "pan" });
  };
  document.getElementById("orbit").onclick = () => {
    if (activeMode === "orbit") { deactivateAll(); activeMode = null; }
    else activateMode("orbit", { scene: { dragmode: "orbit" } });
  };
  document.getElementById("turntable").onclick = () => {
    if (activeMode === "turntable") { deactivateAll(); activeMode = null; }
    else activateMode("turntable", { scene: { dragmode: "turntable" } });
  };
  document.getElementById("resetDefault").onclick = () => {
    deactivateAll();
    Plotly.relayout(plotDiv, {
      "scene.camera": { eye: { x: 1.5, y: 1.5, z: 1.5 }, center: { x: 0, y: 0, z: 0 } }
    });
  };
  document.getElementById("resetLast").onclick = () => {
    deactivateAll();
    if (lastCamera) Plotly.relayout(plotDiv, { "scene.camera": lastCamera });
    else alert("No saved camera position yet!");
  };
}

}

function toggleMode() {
  useGrid = !useGrid;
  plotEquation();
}

export function initGraphUI() {
  const plotBtn = document.getElementById("plotBtn");
  const toggleBtn = document.getElementById("toggleBtn");

  if (plotBtn) plotBtn.addEventListener("click", plotEquation);
  if (toggleBtn) toggleBtn.addEventListener("click", toggleMode);

  plotEquation();
}
