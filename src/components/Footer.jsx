import React from 'react';
import { Linkedin, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import logoIcon from '../assets/icon3.png';

const Footer = ({ onOpenModal }) => {
    const footerLinks = {
        producto: [
            { label: 'Características', href: '#solucion' },
            { label: 'Cómo Funciona', href: '#como-funciona' },
            { label: 'Seguridad', href: '#' },
            { label: 'Precios', href: '#' },
        ],
        legal: [
            { label: 'Privacidad', href: '#' },
            { label: 'Términos de Uso', href: '#' },
            { label: 'Ley 21.643', href: '#' },
        ],
    };

    return (
        <footer className="relative bg-[#0A3866] text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A71B8]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#34B6D8]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            {/* CTA Banner */}
            <div className="relative z-10 border-b border-white/10">
                <div className="container mx-auto px-6 py-14">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl  text-white font-black mb-2 leading-tight">
                                ¿Listo para cumplir con la <span className="text-[#34B6D8]">Ley Karin</span>?
                            </h3>
                            <p className="text-white/60 text-base font-medium">
                                Agenda una demo personalizada y descubre cómo proteger a tu equipo.
                            </p>
                        </div>
                        <button onClick={onOpenModal} className="group bg-white hover:bg-slate-50 text-[#0A3866] px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-white/20 hover:-translate-y-1 inline-flex items-center gap-2 shrink-0">
                            Solicitar Demo
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-6 pt-14 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src={logoIcon} alt="Logo Convivencia Laboral" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-lg font-bold">Convivencia<span className="text-[#34B6D8]">Laboral</span></span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Plataforma líder en gestión de Ley Karin y convivencia laboral. Tecnología preventiva para empresas modernas.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1A71B8] flex items-center justify-center transition-colors duration-300" aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1A71B8] flex items-center justify-center transition-colors duration-300" aria-label="Email">
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Producto */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">Producto</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.producto.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-white/70 hover:text-white text-sm no-underline transition-colors duration-200 hover:translate-x-1 inline-block">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.legal.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-white/70 hover:text-white text-sm no-underline transition-colors duration-200 hover:translate-x-1 inline-block">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">Contacto</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-[#34B6D8] mt-0.5 shrink-0" />
                                <span className="text-white/70 text-sm">Santiago, Chile</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-[#34B6D8] mt-0.5 shrink-0" />
                                <span className="text-white/70 text-sm">info@convivencialaboral.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-[#34B6D8] mt-0.5 shrink-0" />
                                <span className="text-white/70 text-sm">+56 9 8761 8340</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs font-medium">
                        &copy; 2026 Convivencia Laboral. Todos los derechos reservados.
                    </p>
                    <p className="text-white/30 text-xs">
                        Hecho con 🤍 en Chile
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
