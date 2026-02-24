import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './Scrollytelling.css';

const FRAME_COUNT = 80;
const images = [];

// Preload all frames at module level (once)
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

    useMotionValueEvent(frameIndex, 'change', (latest) => {
        drawFrame(Math.round(latest));
    });

    // Draw with object-fit: cover — crops edges, no black bars
    function drawFrame(index) {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const img = images[index];
        if (!img?.complete || !img.naturalWidth) return;

        const ctx = canvas.getContext('2d');
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Canvas always equals viewport
        if (canvas.width !== vw || canvas.height !== vh) {
            canvas.width = vw;
            canvas.height = vh;
        }

        const imgW = img.naturalWidth;
        const imgH = img.naturalHeight;
        const imgAspect = imgW / imgH;
        const vpAspect = vw / vh;

        let sx, sy, sw, sh;
        if (imgAspect > vpAspect) {
            // Image wider than viewport → crop left/right
            sh = imgH;
            sw = imgH * vpAspect;
            sx = (imgW - sw) / 2;
            sy = 0;
        } else {
            // Image taller than viewport → crop top/bottom
            sw = imgW;
            sh = imgW / vpAspect;
            sx = 0;
            sy = (imgH - sh) / 2;
        }

        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, vw, vh);
    }

    // Draw frame 0 on mount
    useEffect(() => {
        const setInitialFrame = () => drawFrame(0);
        const first = images[0];
        if (first.complete && first.naturalWidth) {
            setInitialFrame();
        } else {
            first.onload = setInitialFrame;
        }

        // Redraw on resize so the cover crop stays correct
        window.addEventListener('resize', () => {
            const current = Math.round(frameIndex.get());
            drawFrame(current);
        });
    }, []);

    // Text sections timing
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
                <canvas ref={canvasRef} className="scrollytelling-canvas" />

                {sections.map((s, i) => (
                    <motion.div key={i} className="st-strip" style={{ opacity: s.opacity }}>
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
