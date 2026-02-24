import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './Scrollytelling.css';

const FRAME_COUNT = 80;

const Scrollytelling = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadedImages = [];
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(3, '0');
            img.src = `/quantum_000/quantum_${frameNum}.jpg`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    useMotionValueEvent(frameIndex, 'change', (latest) => {
        if (images.length === 0 || !canvasRef.current) return;
        const index = Math.round(latest);
        if (!images[index] || !images[index].complete) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (canvas.width !== images[index].naturalWidth) {
            canvas.width = images[index].naturalWidth;
            canvas.height = images[index].naturalHeight;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[index], 0, 0);
    });

    useEffect(() => {
        if (images.length > 0) {
            const first = images[0];
            const draw = () => {
                const canvas = canvasRef.current;
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    canvas.width = first.naturalWidth;
                    canvas.height = first.naturalHeight;
                    ctx.drawImage(first, 0, 0);
                }
            };
            if (first.complete) draw();
            else first.onload = draw;
        }
    }, [images]);

    // Text section timing
    const op1 = useTransform(scrollYProgress, [0, 0.05, 0.20, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [60, -60]);

    const op2 = useTransform(scrollYProgress, [0.30, 0.35, 0.50, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.30, 0.55], [60, -60]);

    const op3 = useTransform(scrollYProgress, [0.65, 0.70, 0.85, 0.90], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.65, 0.90], [60, -60]);

    return (
        <div ref={containerRef} className="scrollytelling-container">
            <div className="scrollytelling-sticky">
                <canvas ref={canvasRef} className="scrollytelling-canvas" />

                {/* Section 1 */}
                <motion.div className="scrollytelling-text" style={{ opacity: op1, y: y1 }}>
                    <div className="st-label text-mono">01 — HARDWARE</div>
                    <h2 className="scrollytelling-heading">
                        Engineered for the<br /><span className="scrollytelling-accent">Quantum Era.</span>
                    </h2>
                    <p className="scrollytelling-paragraph">
                        Built from the ground up for quantum workloads.
                        Every component designed to operate at the edge of physical possibility.
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div className="scrollytelling-text" style={{ opacity: op2, y: y2 }}>
                    <div className="st-label text-mono">02 — PERFORMANCE</div>
                    <h2 className="scrollytelling-heading">
                        Infinite Compute.<br /><span className="scrollytelling-accent">Zero Compromise.</span>
                    </h2>
                    <p className="scrollytelling-paragraph">
                        Petaflop-class processing with sub-millisecond latency.
                        Your most demanding workloads, solved in seconds.
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div className="scrollytelling-text" style={{ opacity: op3, y: y3 }}>
                    <div className="st-label text-mono">03 — INFRASTRUCTURE</div>
                    <h2 className="scrollytelling-heading">
                        Your Infrastructure.<br /><span className="scrollytelling-accent">Reimagined.</span>
                    </h2>
                    <p className="scrollytelling-paragraph">
                        Deploy globally in minutes. Our edge network puts
                        quantum compute exactly where your business needs it.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Scrollytelling;
