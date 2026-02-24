import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
    {
        quote: "GQS reduced our protein-folding simulation time from 6 months to under 72 hours. The coherence times on their QPUs are unlike anything available elsewhere.",
        author: "Dr. Priya Menon",
        role: "Head of Computational Biology, Axon Pharmaceuticals",
        avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
        quote: "Our risk modeling division runs 1,500 Monte Carlo simulations per minute on their hybrid quantum-classical cluster. We've gained a decisive edge over any legacy provider.",
        author: "Marcus Webb",
        role: "CTO, Meridian Capital Partners",
        avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
        quote: "The sovereign deployment option gave us air-gapped quantum compute that clears our FedRAMP requirements. Deployment was flawless — live in under three weeks.",
        author: "Col. Sarah Okoro (Ret.)",
        role: "Director of Advanced Systems, DefenseTech Inc.",
        avatar: "https://i.pravatar.cc/150?img=48"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">TESTIMONIALS</div>
                    <h2 className="section-title">Trusted by <span className="text-gradient">Industry Leaders</span></h2>
                    <p className="section-subtitle">
                        From pharmaceutical labs to sovereign defense systems — see what our customers achieve
                        with Global Quantum Solutions infrastructure.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((t, i) => (
                        <div className="testimonial-card glass-panel" key={i}>
                            <div className="stars">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={15} fill="var(--warning)" color="var(--warning)" />
                                ))}
                            </div>
                            <p className="quote">"{t.quote}"</p>
                            <div className="author-info">
                                <img src={t.avatar} alt={t.author} className="author-avatar" />
                                <div>
                                    <h4 className="author-name">{t.author}</h4>
                                    <p className="author-role">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
