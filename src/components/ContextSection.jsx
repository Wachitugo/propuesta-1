import React from 'react';
import { AlertCircle, TrendingDown, Users, FileStack, ShieldAlert } from 'lucide-react';

const ContextSection = () => {
    return (
        <section id="ley-karin" className="relative py-14 sm:py-20 lg:py-24 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
                    
                    {/* IZQUIERDA: Tarjetas (Bento Grid) Premium */}
                    <div className="order-last lg:order-first grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 relative">

                        {/* Tarjeta 1: Riesgo Financiero (Ocupa 2 columnas) */}
                        <div data-animate="slide-right" className="delay-100 sm:col-span-2 bg-[#0A3866] text-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] relative overflow-hidden group shadow-lg transition-transform duration-500 hover:-translate-y-1">
                            
                            {/* Detalle corporativo de fondo */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A71B8]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                            
                            <div className="relative z-10 flex flex-col gap-5">
                                {/* Ícono y Título alineados */}
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-400 border border-red-500/20 shrink-0">
                                        <TrendingDown size={28} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">Riesgo Financiero Máximo</h3>
                                </div>
                                
                                <p className="text-blue-50 text-base md:text-lg leading-relaxed max-w-xl">
                                    Multas significativas impuestas por la Dirección del Trabajo por <span className="font-semibold">no contar con canales de denuncia activos, seguros y protocolos actualizados</span> al momento de una fiscalización.
                                </p>
                            </div>
                        </div>

                        {/* Tarjeta 2: Reputación */}
                        <div data-animate="slide-up" className="delay-200 bg-white border border-slate-200 p-5 sm:p-7 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-start hover:border-[#34B6D8]/40 transition-all duration-300 shadow-sm hover:shadow-md group">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-[#1A71B8] shrink-0 group-hover:bg-[#1A71B8] group-hover:text-white transition-colors duration-300">
                                        <Users size={24} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0A3866] leading-tight">Daño Reputacional</h3>
                                </div>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    Pérdida de talento clave y clima laboral tóxico derivado de una gestión parcial, insegura o poco transparente de las denuncias recibidas.
                                </p>
                            </div>
                        </div>

                        {/* Tarjeta 3: Tiempos */}
                        <div data-animate="slide-up" className="delay-300 bg-white border border-slate-200 p-5 sm:p-7 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-start hover:border-[#1A71B8]/40 transition-all duration-300 shadow-sm hover:shadow-md group">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-[#1A71B8] shrink-0 group-hover:bg-[#1A71B8] group-hover:text-white transition-colors duration-300">
                                        <AlertCircle size={24} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0A3866] leading-tight">Tiempos Críticos</h3>
                                </div>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    Plazos legales y de investigación estrictos e impostergables. Continuar usando hojas de cálculo garantiza ineficiencias y retrasos fatales.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* DERECHA: Contenido de Texto */}
                    <div data-animate="slide-left" className="order-first lg:order-last flex flex-col justify-center">
                        
                        {/* Etiqueta Superior Corporativa */}
                        <div className="inline-flex items-center gap-3 mb-6 sm:mb-8 bg-red-50 text-red-600 border border-red-100 px-4 py-2 rounded-full w-fit max-w-full">
                            <div className="relative flex h-2 w-2 shrink-0">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                            </div>
                            <span className="text-sm font-bold tracking-wide uppercase truncate">
                                Contexto Legal Vigente
                            </span>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[#0A3866] leading-[1.05] mb-5 sm:mb-6">
                            La Ley 21.643 <br />
                            <span className="text-slate-500 font-bold block mt-2">NO es opcional.</span>
                        </h2>
                        
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10">
                            La nueva normativa exige protocolos <strong className="text-slate-800">estrictos, confidenciales e imparciales</strong> para la prevención y sanción del acoso en el trabajo. Un error en un proceso manual no solo levanta alertas legales, destruye por completo la confianza de tu equipo corporativo.
                        </p>

                        {/* Caja de Beneficio / Highlighting */}
                        <div className="relative group">
                            <div className="relative flex items-start sm:items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                <div className="bg-slate-50 p-3.5 rounded-xl shrink-0 border border-slate-100 group-hover:bg-[#1A71B8] transition-colors duration-300">
                                    <FileStack className="text-[#1A71B8] group-hover:text-white transition-colors duration-300" size={28} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-[1.15rem] font-bold text-[#0A3866] mb-1.5 leading-tight">Evite el colapso administrativo</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Automatice de inmediato las actas, seguimientos, notificaciones y reportes exigidos por la Dirección del Trabajo. <span className="text-slate-700 font-medium">Libere a su equipo de Relaciones Laborales de la burocracia</span> para que se enfoquen al 100% en la contención humana.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContextSection;