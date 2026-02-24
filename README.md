# Global Quantum Solutions

**Compute Without Limits** — Enterprise quantum computing and HPC infrastructure for the world's most demanding workloads.

---

## About Global Quantum Solutions

**Global Quantum Solutions (GQS)** is an enterprise quantum computing company providing access to quantum processing units (QPUs), hybrid quantum-classical clusters, and high-performance computing (HPC) infrastructure at a global scale.

Quantum computing harnesses the laws of quantum mechanics — **superposition**, **entanglement**, and **quantum interference** — to process information in fundamentally different ways than classical binary computers. Where traditional computers evaluate one possibility at a time, quantum computers evaluate millions simultaneously, unlocking solutions to problems that are computationally intractable for any classical system.

### What We Solve

- **Drug discovery & molecular simulation** — Simulate molecular interactions at atomic precision in hours, not years
- **Financial portfolio optimization** — Run thousands of Monte Carlo simulations per second for real-time risk modeling
- **Logistics & routing** — Solve NP-hard combinatorial optimization across millions of variables
- **Cryptography & post-quantum security** — Research and implement quantum-resistant encryption at scale
- **AI & machine learning acceleration** — Accelerate training on hybrid quantum-classical neural architectures
- **Climate & materials science** — Model complex physical systems for next-generation battery and catalyst discovery

---

## Platform Overview

GQS provides a full-stack quantum computing platform — from custom silicon to global delivery.

### Quantum Processing Units (QPUs)
Our proprietary QPUs deliver **10,000+ logical qubits** with industry-leading coherence times and two-qubit gate fidelity exceeding 99.9%. Every QPU is engineered from the ground up for error-corrected quantum computation.

### Photonic Interconnects
Terabit-class optical networking within and between compute nodes eliminates the traditional memory bottleneck. Data travels at the speed of light — literally.

### Hybrid Quantum-Classical Compute
Not every problem needs a QPU. Our intelligent scheduler automatically partitions workloads across quantum and classical accelerator fabric (GPU + TPU), extracting maximum advantage from each.

### Zero-Trust Security Architecture
- Post-quantum TLS (CRYSTALS-Kyber + Dilithium)
- Hardware-level attestation on every node
- Isolated execution environments per tenant
- Certifications: FedRAMP High, HIPAA, SOC 2 Type II, ISO 27001

### Global Edge Network
40+ points of presence across 6 continents. Sub-millisecond latency to quantum compute from any major data centre on Earth.

---

## Pricing Tiers

| Plan | Price | Best For |
|------|-------|----------|
| **Research** | $299/mo | Academic labs, algorithm development |
| **Enterprise** | $1,499/mo | Engineering teams, production workloads |
| **Sovereign** | Custom | Regulated industries, air-gapped deployments |

---

## This Repository

This repository contains the **marketing landing page** for Global Quantum Solutions — a cinematic, scroll-driven single-page site built with React and Vite.

### Tech Stack

| | |
|---|---|
| **Framework** | React 19 + Vite 7 |
| **Animations** | Framer Motion 12 (scroll-driven canvas) |
| **Smooth Scroll** | Lenis (expo ease-out inertia) |
| **Icons** | Lucide React |
| **Styling** | Vanilla CSS with custom properties |
| **Fonts** | Sora + JetBrains Mono (Google Fonts) |

### Key Interaction
The **Scrollytelling** section uses an 80-frame image sequence (`public/quantum_000/`) played back in sync with scroll position via an HTML5 canvas element — the same technique used by Apple product pages.

### Getting Started

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # Production bundle
```

### Project Structure

```
src/
├── main.jsx                    # Lenis smooth scroll init
├── App.jsx                     # Section composition
├── index.css                   # Global design tokens
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css          # Animated quantum orbit rings
    ├── Scrollytelling.jsx / .css # 80-frame canvas scrubber
    ├── Features.jsx / .css
    ├── Pricing.jsx / .css
    ├── Testimonials.jsx / .css
    ├── CTA.jsx / .css
    └── Footer.jsx / .css

public/
└── quantum_000/                # quantum_000.jpg → quantum_079.jpg
```

### Design System

```css
--bg-color:       #030712    /* Deep space navy */
--accent-teal:    #00d4ff    /* Quantum teal */
--accent-violet:  #7c3aed    /* Electric violet */
--font-sans:      'Sora'
--font-mono:      'JetBrains Mono'
```

---

## Further Reading

- [What is Quantum Computing? — IBM](https://www.ibm.com/topics/quantum-computing)
- [Quantum Computing Progress — Nature](https://www.nature.com/subjects/quantum-computing)
- [Post-Quantum Cryptography Standards — NIST](https://csrc.nist.gov/projects/post-quantum-cryptography)
- [Quantum Advantage Explained](https://www.mckinsey.com/capabilities/quantumblack/our-insights/quantum-computing)

---

© 2026 Global Quantum Solutions, Inc. All rights reserved.
