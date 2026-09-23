# AI-Based Smart Parking Prediction — Runnable Web Project

This version is designed to run immediately without installing Flutter or Python.

## Run in VS Code
1. Extract this folder.
2. Open the folder in VS Code.
3. Open `index.html`.
4. Right-click and choose **Open with Live Server** (if the Live Server extension is installed), or simply open `index.html` in Chrome.

## Run on GitHub
Upload `index.html`, `style.css`, and `app.js` to the repository root.
Then enable **Settings → Pages → Deploy from branch → main → / (root)**.
After GitHub Pages finishes deploying, the generated Pages URL will open the project in a browser.

## Project features
- AI-style parking occupancy prediction
- Zone recommendation
- Day/time/current occupancy inputs
- Parking slot map
- Responsive mobile UI
- No external API required for the demo

The browser demo uses a deterministic prediction model for demonstration. For a real AI system, connect the UI to a trained ML model using a backend such as FastAPI.
