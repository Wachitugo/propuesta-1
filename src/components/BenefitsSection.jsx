import React from 'react';
import { Shield, Heart, FileSearch } from 'lucide-react';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: Shield,
            title: "Mitigación de riesgos legales",
            description: "Reduce la exposición a multas millonarias y juicios laborales mediante protocolos validados.",
            color: "#3b82f6", // Blue
            bgColor: "rgba(59, 130, 246, 0.1)"
        },
        {
            icon: Heart,
            title: "Mejora real del clima laboral",
            description: "Detecta focos de conflicto tempranamente y actúa de manera preventiva, no solo reactiva.",
            color: "#ec4899", // Pink
            bgColor: "rgba(236, 72, 153, 0.1)"
        },
        {
            icon: FileSearch,
            title: "Trazabilidad completa",
            description: "Auditoría 100% digital de cada caso, entrevista y evidencia para total transparencia.",
            color: "#14b8a6", // Teal
            bgColor: "rgba(20, 184, 166, 0.1)"
        }
    ];

    return (
        <section id="beneficios" style={{ padding: '6rem 0', background: 'var(--color-bg-dark)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Left Column: Title & Benefits */}
                    <div>
                        <div className="animate-fade-in-up">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                                Beneficios tangibles para tu Empresa
                            </h2>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                                Más que cumplir una ley, construye un entorno donde el talento quiera quedarse.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className={`animate-fade-in-up delay-${(idx + 1) * 100}`} style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        backgroundColor: benefit.bgColor,
                                        color: benefit.color,
                                        flexShrink: 0
                                    }}>
                                        <benefit.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                            {benefit.title}
                                        </h3>
                                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.5, fontSize: '0.95rem' }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Testimonial Card */}
                    <div style={{ position: 'relative' }} className="animate-fade-in-up delay-300">
                        {/* Glow Effect Background */}
                        <div className="animate-pulse-glow" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }} />

                        <div className="card animate-float" style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid var(--color-border)',
                            padding: '3rem 2.5rem',
                            position: 'relative',
                            zIndex: 1,
                            borderRadius: '1.5rem',
                            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
                        }}>
                            <p style={{
                                fontSize: '1.125rem',
                                fontStyle: 'italic',
                                color: 'var(--color-text-primary)',
                                lineHeight: 1.6,
                                marginBottom: '2rem'
                            }}>
                                "Desde que implementamos Convivencia Laboral, los tiempos de gestión de denuncias bajaron un 70% y el equipo de RRHH se siente respaldado legalmente en cada paso."
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: '#cbd5e1',
                                    flexShrink: 0
                                }} />
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
                                        María José González
                                    </h4>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                        Gerente de Personas, TechCorp
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
