import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoIcon from '../assets/icon3.png';

const Header = ({ onOpenModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Ley Karin', 'Solución', 'Monitoreo', 'Cómo Funciona', 'Beneficios'];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
            <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">

                {/* 1. Logo (Izquierda) */}
                <a href="#" className="flex items-center gap-3 group z-[60]">
                    {/* Contenedor preparado para tu logo 3D */}
                    <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
                        <img 
                            src={logoIcon} 
                            alt="Logo Convivencia Laboral" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-[#0A3866]">
                        Convivencia<span className="text-[#34B6D8]">Laboral</span>
                    </span>
                </a>

                {/* 2. Navegación Desktop (Centro) */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase().replace(/ /g, '-').replace(/ó/g, 'o')}`} 
                            className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-[#0A3866] hover:bg-slate-50 rounded-full transition-all"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* 3. Acciones Desktop (Derecha) */}
                <div className="hidden md:flex items-center gap-4">
                   
                    <button onClick={onOpenModal} className="bg-[#0A3866] hover:bg-[#1A71B8] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow-md active:scale-95">
                        Solicitar Demo
                    </button>
                </div>

                {/* Botón Menú Móvil */}
                <button
                    className="md:hidden text-slate-600 hover:bg-slate-100 p-2 rounded-lg z-[60] transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Navegación Móvil (Desplegable animado) */}
            <div 
                className={`absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl md:hidden transition-all duration-300 origin-top ${
                    isMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
                }`}
            >
                <div className="flex flex-col p-6 gap-2">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, '-').replace(/ó/g, 'o')}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-between text-[#0A3866] text-lg font-bold py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            {item}
                            <ChevronRight size={20} className="text-slate-400" />
                        </a>
                    ))}
                    
                    <div className="h-px bg-slate-100 my-4"></div>
                    
                    <div className="flex flex-col gap-3 px-2">
                      
                        <button onClick={onOpenModal} className="w-full bg-[#0A3866] hover:bg-[#1A71B8] text-white py-3 rounded-xl font-bold transition-colors shadow-sm">
                            Solicitar Demo
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;