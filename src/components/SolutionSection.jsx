import React from 'react';
import { Sparkles, Compass, FileText, Shield } from 'lucide-react';

const SolutionSection = () => {
    const cards = [
        {
            icon: Compass,
            title: "Asistente de Protocolos Inteligente",
            desc: "No pierdas el rumbo. Nuestra IA guía a los encargados de Relaciones Laborales paso a paso a través de los protocolos obligatorios, alertando sobre plazos legales inminentes para asegurar el cumplimiento total."
        },
        {
            icon: FileText,
            title: "Informes Automatizados con IA",
            desc: "Reduce horas de redacción. Genera borradores de informes de investigación y análisis de clima laboral en segundos, basados en los datos recopilados y sugerencias objetivas de la IA."
        },
        {
            icon: Shield,
            title: "Confidencialidad Blindada",
            desc: "El anonimato es la clave de la confianza. Sistema encriptado que protege la identidad de denunciantes y testigos, accesible solo para personal autorizado con autenticación de doble factor."
        }
    ];

    return (
        <section id="solucion" className="relative py-24 bg-white overflow-hidden">
            {/* Fondo decorativo corporativo */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 border-b border-slate-100 -z-10"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Cabecera de Sección */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A71B8]/10 border border-[#1A71B8]/20 rounded-full text-sm font-bold text-[#1A71B8] mb-6 shadow-sm">
                        <Sparkles size={16} className="text-[#34B6D8]" /> 
                        Potenciado por Inteligencia Artificial
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] text-[#0A3866] tracking-tight">
                        Solución Integral y <br className="hidden sm:block" />
                        <span className="text-slate-400">Tecnológica</span>
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed px-4 font-medium">
                        Transformamos la obligación legal en una oportunidad. Automatiza, protege y gestiona con herramientas diseñadas para la prevención y la acción efectiva.
                    </p>
                </div>

                {/* Grid de Soluciones Premium */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 hover:border-[#1A71B8]/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(10,56,102,0.06)] hover:-translate-y-1 group flex flex-col h-full"
                        >
                            {/* Ícono con contenedor estilizado corporativo */}
                            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 text-[#1A71B8] group-hover:bg-[#0A3866] group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                                <card.icon size={28} strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 text-[#0A3866] leading-tight group-hover:text-[#1A71B8] transition-colors">{card.title}</h3>
                            
                            <p className="text-slate-600 leading-relaxed text-base flex-grow">
                                {card.desc}
                            </p>
                            
                            {/* Pequeño detalle visual de "leer más" implícito */}
                            <div className="mt-8 pt-6 border-t border-slate-100 w-full">
                                <div className="w-8 h-1 bg-slate-200 rounded-full group-hover:bg-[#34B6D8] group-hover:w-16 transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
