import React, { useState } from 'react';
import { ShieldCheck, Twitter, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: '4rem 0 2rem' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '3rem' }}>

                {/* Brand */}
                <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>
                        <div style={{ background: 'var(--color-primary)', padding: '2px', borderRadius: '4px', display: 'flex' }}>
                            <ShieldCheck size={20} color="white" />
                        </div>
                        <span>Convivencia Laboral</span>
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        Plataforma líder en gestión de Ley Karin y convivencia laboral. Tecnología preventiva para empresas modernas.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>

                {/* Spacer */}
                <div style={{ flex: 1, display: 'none' }} className="footer-spacer"></div>

                {/* Producto */}
                <div style={{ flex: '0 0 auto', minWidth: '150px' }}>
                    <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>Producto</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Características</a></li>
                        <li><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Seguridad</a></li>
                        <li><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Integraciones</a></li>
                        <li><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Precios</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div style={{ flex: '0 0 auto', minWidth: '150px' }}>
                    <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacidad</a></li>
                        <li><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Términos de Uso</a></li>
                        <li><a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Ley 21.643</a></li>
                    </ul>
                </div>

            </div>

            <div className="container" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                &copy; 2026 Convivencia Laboral. Todos los derechos reservados.
            </div>

            <style>
                {`
                @media (min-width: 1024px) {
                    .footer-spacer { display: block !important; }
                }
                `}
            </style>
        </footer>
    );
};

export default Footer;
