import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const plans = [
    {
        name: 'Research',
        price: '299',
        period: '/mo',
        desc: 'For academic labs and research teams exploring quantum algorithms.',
        features: [
            '500 QPU hours / month',
            'Up to 1,000 logical qubits',
            '3 concurrent jobs',
            'Community support',
            'Standard API access',
        ],
        cta: 'Start Free Trial',
        highlight: false,
    },
    {
        name: 'Enterprise',
        price: '1,499',
        period: '/mo',
        desc: 'Full-stack quantum access for engineering and data science teams.',
        features: [
            'Unlimited QPU hours',
            'Full 10,000+ qubit access',
            'Priority job scheduling',
            'Dedicated success manager',
            'Custom SDK & integrations',
            'SLA-backed 99.99% uptime',
        ],
        cta: 'Start Free Trial',
        highlight: true,
        badge: 'Most Popular',
    },
    {
        name: 'Sovereign',
        price: 'Custom',
        period: '',
        desc: 'Air-gapped, on-premise or private cloud for regulated industries.',
        features: [
            'Private QPU cluster',
            'Air-gap deployment option',
            'FedRAMP / HIPAA certified',
            '24/7 priority phone support',
            'Custom SLA & compliance',
        ],
        cta: 'Contact Sales',
        highlight: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">PRICING</div>
                    <h2 className="section-title">Transparent <span className="text-gradient">Pricing</span></h2>
                    <p className="section-subtitle">
                        Scale from research to sovereign deployment. No hidden fees. Cancel anytime.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div key={i} className={`pricing-card glass-panel ${plan.highlight ? 'highlighted' : ''}`}>
                            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                            <div className="pricing-header">
                                <h3 className="tier-name">{plan.name}</h3>
                                <div className="tier-price">
                                    {plan.price !== 'Custom' && <span className="currency">$</span>}
                                    <span className="amount">{plan.price}</span>
                                    {plan.period && <span className="period">{plan.period}</span>}
                                </div>
                                <p className="tier-desc">{plan.desc}</p>
                            </div>
                            <ul className="pricing-features">
                                {plan.features.map((f, j) => (
                                    <li key={j}>
                                        <Check className="check-icon" size={16} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={`btn w-full ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
