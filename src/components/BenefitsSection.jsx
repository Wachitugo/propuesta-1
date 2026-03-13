import React from 'react';
import { Shield, Heart, FileSearch, Award, ArrowRight, Quote } from 'lucide-react';

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
        <section id="beneficios" className="py-24 bg-slate-50 overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#34B6D8]/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Title & Benefit Cards */}
                    <div>
                        {/* Section Header */}
                        <div className="mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A71B8]/10 border border-[#1A71B8]/20 rounded-full text-sm font-bold text-[#1A71B8] mb-6 shadow-sm">
                                <Award size={16} className="text-[#34B6D8]" />
                                Resultados Comprobados
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] text-[#0A3866] tracking-tight">
                                Beneficios Tangibles<br className="hidden sm:block" />
                                <span className="text-slate-400">para tu Empresa</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                Más que cumplir una ley, construye un entorno donde el talento quiera quedarse.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="flex flex-col gap-5">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="group bg-white border border-slate-200 rounded-2xl p-6 flex gap-5 items-start hover:border-[#1A71B8]/40 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(10,56,102,0.06)] hover:-translate-y-0.5">
                                    
                                    {/* Icon */}
                                    <div 
                                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                                        style={{ backgroundColor: `${benefit.accent}10`, color: benefit.accent }}
                                    >
                                        <benefit.icon size={26} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-3 mb-1.5">
                                            <h3 className="text-lg font-bold text-[#0A3866] group-hover:text-[#1A71B8] transition-colors leading-snug">
                                                {benefit.title}
                                            </h3>
                                            <div className="text-right shrink-0">
                                                <span className="text-xl font-black" style={{ color: benefit.accent }}>{benefit.stat}</span>
                                                <span className="block text-[10px] text-slate-500 font-semibold">{benefit.statLabel}</span>
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

                    {/* Right Column: Testimonial Card */}
                    <div className="relative">
                        {/* Subtle glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[radial-gradient(circle,rgba(26,113,184,0.08)_0%,transparent_70%)] z-0 pointer-events-none"></div>
                        
                        <div className="bg-white border border-slate-200 p-10 md:p-12 relative z-10 rounded-[2rem] shadow-[0_20px_50px_rgba(10,56,102,0.07)] hover:shadow-[0_30px_60px_rgba(10,56,102,0.1)] transition-all duration-500">
                            {/* Quote Icon */}
                            <div className="w-12 h-12 rounded-xl bg-[#1A71B8]/10 flex items-center justify-center mb-6">
                                <Quote size={22} className="text-[#1A71B8]" />
                            </div>
                            
                            <p className="text-lg text-[#0A3866] leading-relaxed mb-8 font-medium">
                                "Desde que implementamos Convivencia Laboral, los tiempos de gestión de denuncias bajaron un 70% y el equipo de RRHH se siente respaldado legalmente en cada paso."
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A71B8] to-[#34B6D8] flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    MJ
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-[#0A3866]">
                                        María José González
                                    </h4>
                                    <p className="text-sm text-slate-500 font-medium">
                                        Gerente de Personas, TechCorp
                                    </p>
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-[2rem]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#34B6D8]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            </div>
                        </div>

                        {/* CTA Below testimonial */}
                        <div className="mt-8 text-center">
                            <button className="group bg-[#1A71B8] hover:bg-[#0A3866] text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-[#34B6D8]/30 hover:-translate-y-1 inline-flex items-center gap-2">
                                Solicitar Demo Gratuita
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
