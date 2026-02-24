import React from 'react';
import { ArrowRight, Cpu, Globe, Server, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Animated background */}
            <div className="hero-background">
                <div className="hero-grid"></div>
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="glow-orb orb-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">

                    <div className="hero-badge">
                        <span className="badge-pulse"></span>
                        <span className="text-mono">NOW AVAILABLE</span>
                        &nbsp;— Quantum Cloud v3.0
                        <ChevronRight size={14} className="badge-arrow" />
                    </div>

                    <h1 className="hero-title">
                        Compute<br />
                        <span className="text-gradient">Without Limits.</span>
                    </h1>

                    <p className="hero-description">
                        Enterprise quantum computing and HPC infrastructure engineered
                        for the world's most demanding workloads. Deploy in minutes. Scale infinitely.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg">
                            Request a Demo <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-secondary btn-lg">
                            Explore Technology
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <Cpu className="stat-icon" size={20} />
                            <div className="stat-info">
                                <h4>10,000+</h4>
                                <p>Logical Qubits</p>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <Globe className="stat-icon" size={20} />
                            <div className="stat-info">
                                <h4>99.99%</h4>
                                <p>Uptime SLA</p>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <Server className="stat-icon" size={20} />
                            <div className="stat-info">
                                <h4>500+</h4>
                                <p>Enterprise Clients</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — animated node mesh visual */}
                <div className="hero-visual" aria-hidden="true">
                    <div className="node-mesh">
                        <div className="mesh-ring ring-1"></div>
                        <div className="mesh-ring ring-2"></div>
                        <div className="mesh-ring ring-3"></div>
                        <div className="mesh-core">
                            <div className="core-pulse"></div>
                            <Cpu size={36} className="core-icon" />
                        </div>
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className={`mesh-node node-${i}`}>
                                <span></span>
                            </div>
                        ))}
                        <svg className="mesh-lines" viewBox="0 0 400 400">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
                                const angle = (i * 45) * Math.PI / 180;
                                const r = 155;
                                const x = 200 + r * Math.cos(angle);
                                const y = 200 + r * Math.sin(angle);
                                return <line key={i} x1="200" y1="200" x2={x} y2={y} stroke="url(#lineGrad)" strokeWidth="1" />;
                            })}
                        </svg>
                    </div>

                    {/* Floating stat cards */}
                    <div className="float-card card-latency">
                        <span className="float-label text-mono">LATENCY</span>
                        <span className="float-value">&lt;1ms</span>
                    </div>
                    <div className="float-card card-ops">
                        <span className="float-label text-mono">QOPS/s</span>
                        <span className="float-value">4.8T</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
