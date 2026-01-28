# Derivium
**From Limits to 3D Graphs - Solve, Explore, Visualize**

Derivium is a modern **full-stack web application** designed to help students and educators **compute and visualize calculus concepts** interactively. It combines symbolic computation, dynamic equation rendering, smooth animations, and **2D/3D graph plotting** to create a powerful learning experience.

---

## ✨ Features

### 🧮 Calculus Engines
- **Limit Calculator** – Single variable limits with textbook-style output
- **Derivative Calculator**
  - Regular derivatives
  - Partial derivatives
  - Total differentials
- **Robust error handling** with clear user feedback

### 📈 Graph Visualization
- **3D surface plotting** using Plotly.js
- Interactive controls:
  - Zoom / Pan
  - Orbital & turntable rotation
  - Reset camera (default & last saved)
  - Export graph as PNG
- Transparent canvas to blend with custom UI themes

### 🎨 Modern UI / UX
- Smooth **GSAP animations**
- **KaTeX** for LaTeX-quality mathematical expressions
- Glassmorphism-inspired UI
- Fully interactive desktop experience
- Responsive layout with mobile fallback messaging

---

## 🏗️ Tech Stack

### Frontend
- HTML5  
- CSS3  
- JavaScript (ES6)  
- GSAP (Animations)  
- KaTeX (Math Rendering)  
- Plotly.js (Graph Visualization)

### Backend
- Python  
- Flask (REST API)  
- SymPy (Symbolic Mathematics)  
- CORS & JSON APIs  

---

## 🧠 Architecture Overview

Frontend (UI)
│
├── User Input (Equations)
├── GSAP + KaTeX Rendering
├── Plotly Graph Engine
│
└── Fetch API
│
▼
Backend (Flask API)
│
├── SymPy Computation
├── Expression Parsing
└── JSON Response

---

## 🔐 Backend Code Notice

The **frontend source code** is publicly available in this repository and can be freely reviewed.

The **backend is hosted separately** and **not included in this repository for security reasons**, as it contains critical logic and API handling.  
For academic or evaluation purposes, the complete backend source code is provided **privately via email**.

---

## 📂 Project Structure

Derivium/
│
├── index.html
├── src/
│ ├── pages/
│ │ ├── about.html
│ │ ├── contact.html
│ │ └── getstarted.html
│ ├── css/
│ ├── js/
│ └── assets/
│
├── README.md
└── package.json


---

## 🚀 Live Demo

🔗 **Website:** https://derivium-coral.vercel.app/

---

## 👥 Team

- **Syed Muhammad Taha Hassan**  
  Lead Developer • Frontend Developer • API Integration

- **Maaz Ahmed Khan**  
  Backend Developer • API Integration

- **Ahsan Ali Shaikh**  
  UI Design • Testing & QA

---

## 🎯 Project Goal

Derivium aims to **bridge the gap between mathematical theory and visual intuition**, enabling users to:
- Experiment with calculus equations
- Instantly visualize results
- Learn through interaction rather than static formulas

---

## 📌 Future Enhancements
- 2D graph modules
- Step-by-step solution breakdown
- User-defined variable ranges
- Performance optimizations for large datasets

---

## 📜 License

This project is intended for **educational and academic use**.  
All rights reserved by the project contributors.

---

⭐ If you find this project interesting, don’t forget to **star the repository**! 
- You Can support me on Patreon as well!
