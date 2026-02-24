import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './Scrollytelling.css';

const FRAME_COUNT = 80;
const images = [];

// Preload all frames immediately (module-level, once)
for (let i = 0; i < FRAME_COUNT; i++) {
    const img = new Image();
    img.src = `/quantum_000/quantum_${String(i).padStart(3, '0')}.jpg`;
    images.push(img);
}

const Scrollytelling = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Draw the correct frame whenever scroll changes
    useMotionValueEvent(frameIndex, 'change', (latest) => {
        drawFrame(Math.round(latest));
    });

    function drawFrame(index) {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const img = images[index];
        if (!img?.complete || !img.naturalWidth) return;

        const ctx = canvas.getContext('2d');
        // Fit canvas to viewport maintaining image aspect ratio
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const imgW = img.naturalWidth;
        const imgH = img.naturalHeight;
        const scale = Math.min(vw / imgW, vh / imgH);
        canvas.width = imgW * scale;
        canvas.height = imgH * scale;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // Draw frame 0 once images are ready
    useEffect(() => {
        const first = images[0];
        if (first.complete) {
            drawFrame(0);
        } else {
            first.onload = () => drawFrame(0);
        }
    }, []);

    // Text section timings (progress ranges for fade in/stay/fade out)
    const op1 = useTransform(scrollYProgress, [0.00, 0.06, 0.22, 0.28], [0, 1, 1, 0]);
    const op2 = useTransform(scrollYProgress, [0.32, 0.38, 0.54, 0.60], [0, 1, 1, 0]);
    const op3 = useTransform(scrollYProgress, [0.66, 0.72, 0.88, 0.94], [0, 1, 1, 0]);

    const sections = [
        { opacity: op1, num: '01', label: 'HARDWARE', heading: 'Engineered for the Quantum Era.' },
        { opacity: op2, num: '02', label: 'PERFORMANCE', heading: 'Infinite Compute. Zero Compromise.' },
        { opacity: op3, num: '03', label: 'INFRASTRUCTURE', heading: 'Your Infrastructure. Reimagined.' },
    ];

    return (
        <div ref={containerRef} className="scrollytelling-container">
            <div className="scrollytelling-sticky">
                {/* Full-bleed canvas — animation takes the whole screen */}
                <canvas ref={canvasRef} className="scrollytelling-canvas" />

                {/* Slim bottom-strip text — one line, minimal overlap */}
                {sections.map((s, i) => (
                    <motion.div
                        key={i}
                        className="st-strip"
                        style={{ opacity: s.opacity }}
                        aria-hidden={i !== 0}
                    >
                        <span className="st-num">{s.num}</span>
                        <span className="st-divider" />
                        <span className="st-label">{s.label}</span>
                        <span className="st-heading">{s.heading}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Scrollytelling;
