import React from 'react';
import { Inbox, CheckCircle, Search, Scale, ArrowRight } from 'lucide-react';

const FlowSection = () => {
    const steps = [
        {
            icon: Inbox,
            step: "Recepción",
            num: "01",
            desc: "Ingreso seguro de denuncias o incidentes mediante canal integrado y anónimo.",
            accent: "#1A71B8"
        },
        {
            icon: CheckCircle,
            step: "Gestión",
            num: "02",
            desc: "La plataforma asigna tareas, recuerda plazos y sugiere medidas de resguardo automáticamente.",
            accent: "#34B6D8"
        },
        {
            icon: Search,
            step: "Investigación",
            num: "03",
            desc: "Registro de evidencias y entrevistas en un entorno digital seguro y confidencial.",
            accent: "#0A3866"
        },
        {
            icon: Scale,
            step: "Resolución",
            num: "04",
            desc: "Generación de informe final y plan correctivo sugerido por la IA con respaldo legal.",
            accent: "#10b981"
        }
    ];

    return (
        <section id="como-funciona" className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 border-b border-slate-100 -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div data-animate="slide-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A71B8]/10 border border-[#1A71B8]/20 rounded-full text-xs sm:text-sm font-bold text-[#1A71B8] mb-5 sm:mb-6 shadow-sm">
                        <ArrowRight size={16} className="text-[#34B6D8]" />
                        Proceso Paso a Paso
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-[1.1] text-[#0A3866] tracking-tight">
                        Flujo de Seguimiento{' '}<br className="hidden sm:block" />
                        <span className="text-slate-400">en Tiempo Real</span>
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4 font-medium">
                        Desde la denuncia hasta la resolución, cada paso está optimizado y respaldado por la plataforma.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">

                    {/* Connecting line - desktop */}
                    <div className="absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#1A71B8]/30 via-[#34B6D8]/30 to-[#10b981]/30 z-0 hidden lg:block"></div>

                    {steps.map((item, idx) => (
                        <div key={idx} data-animate="slide-up" className={`delay-${(idx + 1) * 100} relative z-10 group`}>
                            <div className="bg-white border border-slate-200 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 h-full flex flex-col items-center text-center hover:border-[#1A71B8]/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(10,56,102,0.06)] hover:-translate-y-1">
                                
                                {/* Step Number + Icon */}
                                <div className="relative mb-6">
                                    <div 
                                        className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:scale-105"
                                        style={{ backgroundColor: `${item.accent}10` }}
                                    >
                                        <item.icon size={30} style={{ color: item.accent }} strokeWidth={1.5} />
                                    </div>
                                    <span 
                                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-[11px] font-bold flex items-center justify-center shadow-md"
                                        style={{ backgroundColor: item.accent }}
                                    >
                                        {item.num}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-[#0A3866] group-hover:text-[#1A71B8] transition-colors">{item.step}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                                
                                {/* Bottom accent bar */}
                                <div className="mt-6 pt-5 border-t border-slate-100 w-full">
                                    <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto group-hover:w-16 transition-all duration-500" style={{ '--tw-bg-opacity': 1 }}>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow connector between cards - desktop */}
                            {idx < 3 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-[18px] -translate-y-1/2 z-20 w-8 h-8 bg-white border border-slate-200 rounded-full items-center justify-center shadow-sm">
                                    <ArrowRight size={14} className="text-[#1A71B8]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlowSection;
