import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const heroImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
];

// Custom Typewriter component
const Typewriter = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const isTyping = index < text.length;

    const startTyping = () => {
        setDisplayedText('');
        setIndex(0);
    };

    useEffect(() => {
        if (!isTyping) return;
        
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            setIndex(index + 1);
        }, 60); // Typing speed in ms
        
        return () => clearTimeout(timeout);
    }, [index, isTyping, text]);

    return (
        <span 
            onClick={startTyping} 
            className="cursor-pointer relative inline-flex items-center group min-h-[1.2em]" 
            title="Haz clic para reescribir"
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A71B8] to-[#34B6D8]">
                {displayedText || '\u00A0'}
            </span>
            <span className={`inline-block w-[4px] h-[1em] bg-[#1A71B8] ml-1 transition-opacity duration-100 ${!isTyping ? 'animate-pulse opacity-50' : 'opacity-100'}`}></span>
        </span>
    );
};

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
            {/* Background Animated Blobs */}
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-[#34B6D8]/5 to-slate-100"></div>
                
                <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#34B6D8]/30 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#1A71B8]/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-sky-300/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDuration: '7s', animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto mt-4 sm:mt-10 px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">

                    {/* Text Content - Left Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">

                        {/* Animated Badge */}
                        <div data-animate="slide-up" className="inline-flex items-center gap-2 bg-[#34B6D8]/10 border border-[#34B6D8]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-[#1A71B8] mb-5 sm:mb-6 shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34B6D8] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1A71B8]"></span>
                            </span>
                            CUMPLE CON LA LEY 21.643
                        </div>

                        {/* Heading */}
                        <h1 data-animate="slide-right" className="delay-100 mb-5 sm:mb-6 tracking-tight text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[#0A3866] flex flex-col items-center lg:items-start">
                            <span>Gestión de la Ley Karin:</span>
                            <span className="inline-block mt-2">
                                <Typewriter text="Simple, Segura y con IA" />
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p data-animate="slide-right" className="delay-200 max-w-xl mb-8 sm:mb-10 text-base sm:text-lg text-slate-600 leading-relaxed">
                            La plataforma integral para el seguimiento de la convivencia laboral. Automatiza informes, asegura la confidencialidad y cumple con los plazos y protocolos sin errores.
                        </p>

                        {/* Actions */}
                        <div data-animate="slide-up" className="delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <a
                                href="#solucion"
                                className="group inline-flex items-center justify-center gap-2 bg-[#1A71B8] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#0A3866] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A71B8]/30 active:scale-95"
                            >
                                Ver la Solución
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </a>
                       
                        </div>

                        {/* Trust Indicator */}
                        <div data-animate="slide-up" className="delay-400 mt-8 flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <ShieldCheck size={18} className="text-[#34B6D8]" />
                            <span>Información encriptada y 100% confidencial</span>
                        </div>
                    </div>

                    {/* Visual Content - Right Side */}
                    <div data-animate="scale-up" className="delay-300 w-full lg:w-1/2 relative mt-6 sm:mt-10 lg:mt-0">
                        {/* More subtle background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#34B6D8]/10 to-[#1A71B8]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        
                        <div className="relative w-full aspect-[16/11] md:aspect-[4/3] max-w-[600px] mx-auto group perspective-[2000px]">
                            
                            {/* Dashboard Window Container */}
                            <div className="relative w-full h-full rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(10,56,102,0.15)]   transition-all duration-700 ease-out group-hover:shadow-[0_40px_80px_rgba(26,113,184,0.2)] transform-gpu rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 overflow-hidden">
                                
                                {/* Mac-like Toolbar */}
                                <div className="absolute top-0 left-0 w-full h-10 md:h-12 bg-white/90 backdrop-blur-md border-b border-slate-200/80 flex items-center px-4 z-30">
                                    <div className="flex space-x-2">
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-300"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-300"></div>
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-300"></div>
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 h-5 w-1/3 bg-slate-100 rounded-md border border-slate-200/60 hidden md:block"></div>
                                </div>

                                {/* Images */}
                                <div className="absolute top-10 md:top-12 inset-x-0 bottom-0 bg-white">
                                    {heroImages.map((src, idx) => (
                                        <div 
                                            key={src}
                                            className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-in-out ${
                                                idx === currentImageIndex 
                                                    ? 'opacity-100 z-10' 
                                                    : 'opacity-0 z-0'
                                            }`}
                                        >
                                            <img 
                                                src={src} 
                                                alt={`Plataforma Convivencia Laboral Dashboard ${idx + 1}`} 
                                                className={`w-full h-full object-cover object-top transition-transform duration-[8000ms] ease-out ${
                                                    idx === currentImageIndex ? 'scale-105' : 'scale-100'
                                                }`}
                                            />
                                            {/* Subtle gradient overlay to simulate monitor glare */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none mix-blend-overlay"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;