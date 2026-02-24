import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from 'lenis'

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.5,
  infinite: false,
});

// Expose to window so Framer Motion / other components can sync if needed
window.__lenis = lenis;

// Pull Lenis into the native requestAnimationFrame loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
