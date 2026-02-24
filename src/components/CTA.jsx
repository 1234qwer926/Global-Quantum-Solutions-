import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="section cta-section">
            <div className="container">
                <div className="cta-box">
                    <div className="cta-content">
                        <div className="section-label">GET STARTED</div>
                        <h2 className="cta-title">Ready to Enter the<br />Quantum Age?</h2>
                        <p className="cta-description">
                            Deploy enterprise quantum infrastructure in minutes.
                            Join 500+ organizations already computing at the frontier.
                        </p>
                        <div className="cta-actions">
                            <button className="btn btn-primary btn-lg">
                                Schedule a Demo <ArrowRight size={18} />
                            </button>
                            <button className="btn btn-secondary btn-lg">
                                View Documentation
                            </button>
                        </div>
                        <p className="cta-footnote">No credit card required · 14-day free trial · Cancel anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
