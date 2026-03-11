import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1rem 0'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-primary)', fontWeight: 'bold', fontSize: '1.1rem', zIndex: 60 }}>
                    <div style={{ background: 'var(--color-primary)', padding: '4px', borderRadius: '6px', display: 'flex' }}>
                        <ShieldCheck size={20} color="white" />
                    </div>
                    <span>Convivencia <span style={{ color: 'var(--color-text-muted)' }}>Laboral</span></span>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {['Ley Karin', 'Solución', 'Cómo Funciona', 'Beneficios'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-').replace(/ó/g, 'o')}`} style={{
                            color: 'var(--color-text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'color 0.2s'
                        }}
                            onMouseOver={(e) => e.target.style.color = 'var(--color-text-primary)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                        Solicitar Demo
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="nav-mobile-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', cursor: 'pointer', zIndex: 60 }}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Dropdown */}
                {isMenuOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '60px',
                        left: 0,
                        right: 0,
                        background: 'var(--color-bg-dark)',
                        borderBottom: '1px solid var(--color-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2rem',
                        gap: '1.5rem',
                        alignItems: 'center',
                        zIndex: 50,
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}>
                        {['Ley Karin', 'Solución', 'Cómo Funciona', 'Beneficios'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/ /g, '-').replace(/ó/g, 'o')}`}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    color: 'var(--color-text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: 500
                                }}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="btn btn-primary" style={{ width: '100%', maxWidth: '200px' }}>
                            Solicitar Demo
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
