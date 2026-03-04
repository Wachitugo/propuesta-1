import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero" style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', maxWidth: '100vw' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

                {/* Badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent-blue)', marginBottom: '1.5rem', maxWidth: '90%' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent-blue)', flexShrink: 0 }}></div>
                    CUMPLE CON LA LEY 21.643
                </div>

                {/* Heading */}
                <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.02em', fontSize: '3.5rem', lineHeight: 1.1 }}>
                    Gestión de la Ley Karin:<br />
                    <span className="text-gradient" style={{
                        background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Simple, Segura y con IA</span>
                </h1>

                {/* Subtext */}
                <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.6, padding: '0 1rem' }}>
                    La plataforma integral para el seguimiento de la convivencia laboral. Automatiza informes, asegura la confidencialidad y cumple con los plazos y protocolos de la Ley 21.643 sin errores.
                </p>

                {/* Actions */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', padding: '0 1rem' }}>
                    <button className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '1rem', width: 'auto' }}>
                        Solicitar Demo Gratuita <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </button>

                    <button className="btn btn-outline" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-secondary)',
                        background: 'rgba(15, 23, 42, 0.05)',
                        width: 'auto'
                    }}>
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Play size={10} fill="var(--color-text-secondary)" strokeWidth={0} />
                        </div>
                        Ver Video Explicativo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
