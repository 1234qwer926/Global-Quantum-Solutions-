import React from 'react';
import { Twitter, Github, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="#" className="logo footer-logo">
                            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                                <circle cx="14" cy="14" r="3" fill="url(#fLg)" />
                                <ellipse cx="14" cy="14" rx="13" ry="5.5" stroke="url(#fLg)" strokeWidth="1.5" fill="none" />
                                <ellipse cx="14" cy="14" rx="13" ry="5.5" stroke="url(#fLg)" strokeWidth="1.5" fill="none" transform="rotate(60 14 14)" opacity="0.6" />
                                <defs>
                                    <linearGradient id="fLg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00d4ff" />
                                        <stop offset="1" stopColor="#7c3aed" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>Global <strong>Quantum</strong> Solutions</span>
                        </a>
                        <p className="footer-desc">
                            Enterprise quantum computing and HPC infrastructure for
                            the world's most demanding workloads. Compute without limits.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Twitter size={18} /></a>
                            <a href="#" className="social-icon"><Github size={18} /></a>
                            <a href="#" className="social-icon"><Linkedin size={18} /></a>
                            <a href="#" className="social-icon"><Youtube size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Products</h4>
                        <ul className="footer-links">
                            <li><a href="#">Quantum Cloud</a></li>
                            <li><a href="#">Bare Metal QPU</a></li>
                            <li><a href="#">Hybrid Compute</a></li>
                            <li><a href="#">Edge Nodes</a></li>
                            <li><a href="#">Sovereign Deploy</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Research</h4>
                        <ul className="footer-links">
                            <li><a href="#">Whitepaper Library</a></li>
                            <li><a href="#">Open Source SDKs</a></li>
                            <li><a href="#">Quantum Academy</a></li>
                            <li><a href="#">Developer Docs</a></li>
                            <li><a href="#">API Reference</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#">About GQS</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">News &amp; Press</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Global Quantum Solutions, Inc. All rights reserved.</p>
                    <p className="footer-tagline text-mono">COMPUTE WITHOUT LIMITS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
