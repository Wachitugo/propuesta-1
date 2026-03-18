import React from 'react';
import { Shield, Heart, FileSearch, Award, Quote } from 'lucide-react';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: Shield,
            title: "Mitigación de riesgos legales",
            description: "Reduce la exposición a multas millonarias y juicios laborales mediante protocolos validados y automatizados.",
            stat: "100%",
            statLabel: "Cumplimiento",
            accent: "#1A71B8"
        },
        {
            icon: Heart,
            title: "Mejora real del clima laboral",
            description: "Detecta focos de conflicto tempranamente y actúa de manera preventiva, no solo reactiva.",
            stat: "-70%",
            statLabel: "Tiempo gestión",
            accent: "#34B6D8"
        },
        {
            icon: FileSearch,
            title: "Trazabilidad completa",
            description: "Auditoría 100% digital de cada caso, entrevista y evidencia para total transparencia ante la DT.",
            stat: "360°",
            statLabel: "Visibilidad",
            accent: "#0A3866"
        }
    ];

    return (
        <section id="beneficios" className="py-14 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#34B6D8]/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 sm:gap-14 lg:gap-16 items-center">

                    {/* Left Column: Title & Benefit Cards */}
                    <div>
                        {/* Section Header */}
                        <div data-animate="slide-right" className="mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A71B8]/10 border border-[#1A71B8]/20 rounded-full text-xs sm:text-sm font-bold text-[#1A71B8] mb-5 sm:mb-6 shadow-sm">
                                <Award size={16} className="text-[#34B6D8]" />
                                Resultados Comprobados
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-[1.1] text-[#0A3866] tracking-tight">
                                Beneficios Tangibles{' '}<br className="hidden sm:block" />
                                <span className="text-slate-400">para tu Empresa</span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                                Más que cumplir una ley, construye un entorno donde el talento quiera quedarse.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="flex flex-col gap-5">
                            {benefits.map((benefit, idx) => (
                                <div 
                                    key={idx} 
                                    data-animate="slide-right" 
                                    style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                                    className="group bg-white border border-slate-200 rounded-2xl p-6 flex gap-5 items-start hover:border-[#1A71B8]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(10,56,102,0.05)] hover:-translate-y-0.5"
                                >
                                    
                                    {/* Icon */}
                                    <div 
                                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                                        style={{ backgroundColor: `${benefit.accent}15`, color: benefit.accent }}
                                    >
                                        <benefit.icon size={26} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-[#0A3866] group-hover:text-[#1A71B8] transition-colors leading-snug">
                                                {benefit.title}
                                            </h3>
                                            <div className="text-right shrink-0">
                                                <span className="text-xl font-black" style={{ color: benefit.accent }}>{benefit.stat}</span>
                                                <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{benefit.statLabel}</span>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

              
                    
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;