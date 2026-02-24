import React from 'react';
import { Cpu, Network, Zap, ShieldCheck, Globe, Server } from 'lucide-react';
import './Features.css';

const featuresData = [
    {
        icon: <Cpu size={22} />,
        label: 'PROCESSING',
        title: 'Quantum Processing Units',
        description: 'Purpose-built QPUs delivering 10,000+ logical qubits with world-leading coherence times and gate fidelity exceeding 99.9%.'
    },
    {
        icon: <Network size={22} />,
        label: 'NETWORKING',
        title: 'Photonic Interconnects',
        description: 'Terabit-class optical networking within and between nodes eliminates the von Neumann bottleneck entirely.'
    },
    {
        icon: <Zap size={22} />,
        label: 'ACCELERATION',
        title: 'AI-Accelerated Compute',
        description: 'Hybrid quantum-classical workloads automatically offloaded to our custom GPU and tensor accelerator fabric.'
    },
    {
        icon: <ShieldCheck size={22} />,
        label: 'SECURITY',
        title: 'Zero-Trust Architecture',
        description: 'Quantum-resistant cryptography across all layers. Post-quantum TLS, hardware attestation, and isolated execution environments.'
    },
    {
        icon: <Globe size={22} />,
        label: 'EDGE',
        title: 'Global Edge Network',
        description: '40+ PoPs across 6 continents. Your quantum workloads run from a node nearest to your data — latency as low as 0.8ms.'
    },
    {
        icon: <Server size={22} />,
        label: 'COMPUTE',
        title: 'Dedicated Bare Metal',
        description: 'Single-tenant bare metal quantum nodes for regulated industries. HIPAA, FedRAMP, SOC 2 Type II certified environments.'
    },
];

const Features = () => {
    return (
        <section id="technology" className="section features-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">CAPABILITIES</div>
                    <h2 className="section-title">Quantum-Grade <span className="text-gradient">Infrastructure</span></h2>
                    <p className="section-subtitle">
                        A full-stack quantum computing platform — from custom silicon to global delivery.
                        Every layer engineered for the most demanding scientific and enterprise workloads.
                    </p>
                </div>

                <div className="features-grid">
                    {featuresData.map((f, i) => (
                        <div className="feature-card glass-panel" key={i}>
                            <div className="feature-icon-wrapper">
                                {f.icon}
                            </div>
                            <div className="feature-label text-mono">{f.label}</div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
