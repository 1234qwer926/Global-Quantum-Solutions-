import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">

                {/* Logo */}
                <a href="#" className="logo">
                    <div className="logo-mark">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="14" cy="14" r="3" fill="url(#lg1)" />
                            <ellipse cx="14" cy="14" rx="13" ry="5.5" stroke="url(#lg1)" strokeWidth="1.5" fill="none" />
                            <ellipse cx="14" cy="14" rx="13" ry="5.5" stroke="url(#lg2)" strokeWidth="1.5" fill="none" transform="rotate(60 14 14)" opacity="0.7" />
                            <ellipse cx="14" cy="14" rx="13" ry="5.5" stroke="url(#lg3)" strokeWidth="1.5" fill="none" transform="rotate(120 14 14)" opacity="0.5" />
                            <defs>
                                <linearGradient id="lg1" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00d4ff" />
                                    <stop offset="1" stopColor="#7c3aed" />
                                </linearGradient>
                                <linearGradient id="lg2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00d4ff" />
                                    <stop offset="1" stopColor="#7c3aed" />
                                </linearGradient>
                                <linearGradient id="lg3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00d4ff" />
                                    <stop offset="1" stopColor="#7c3aed" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="logo-text">Global <span className="logo-accent">Quantum</span></span>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-menu">
                    <ul className="nav-links">
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#technology">Technology</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#testimonials">Enterprise</a></li>
                    </ul>
                    <div className="nav-actions">
                        <button className="btn btn-ghost nav-btn">Sign In</button>
                        <button className="btn btn-primary nav-btn">Request Demo</button>
                    </div>
                </div>

                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a></li>
                    <li><a href="#technology" onClick={() => setMobileMenuOpen(false)}>Technology</a></li>
                    <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
                    <li><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Enterprise</a></li>
                </ul>
                <div className="mobile-nav-actions">
                    <button className="btn btn-secondary w-full mb-3">Sign In</button>
                    <button className="btn btn-primary w-full">Request Demo</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
