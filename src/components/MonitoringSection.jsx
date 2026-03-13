import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Activity, ShieldCheck, AlertTriangle, BarChart3 } from 'lucide-react';

const dataArea = [
    { name: 'Ene', value: 65 },
    { name: 'Feb', value: 68 },
    { name: 'Mar', value: 75 },
    { name: 'Abr', value: 72 },
    { name: 'May', value: 85 },
    { name: 'Jun', value: 82 },
];

const dataPie = [
    { name: 'Resueltos', value: 42 },
    { name: 'En Proceso', value: 15 },
    { name: 'Investigación', value: 8 },
    { name: 'Pendientes', value: 5 },
];

// Nueva paleta corporativa sobria (eliminamos el semáforo)
const COLORS_PROFESSIONAL = ['#1A71B8', '#64748B', '#94A3B8', '#CBD5E1'];

const dataBar = [
    { name: 'Acoso Laboral', value: 12 },
    { name: 'Violencia', value: 3 },
    { name: 'Acoso Sexual', value: 5 },
    { name: 'Discriminación', value: 8 },
];

// Tooltip limpio y minimalista
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-xl">
                {label && <p className="text-slate-500 text-xs mb-1">{label}</p>}
                <p className="text-[#0A3866] text-sm font-semibold">{`${payload[0].value} registros`}</p>
            </div>
        );
    }
    return null;
};

const MonitoringSection = () => {
    const totalCasos = dataPie.reduce((sum, d) => sum + d.value, 0);
    const porcentajeResueltos = Math.round((dataPie[0].value / totalCasos) * 100);
    const totalAlertas = dataBar.reduce((sum, d) => sum + d.value, 0);

    return (
        <section id="monitoreo" className="py-14 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden relative">
            {/* Fondo decorativo (Mantenido) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34B6D8]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A71B8]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Cabecera de Sección */}
                <div data-animate="slide-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A71B8]/10 border border-[#1A71B8]/20 rounded-full text-xs sm:text-sm font-bold text-[#1A71B8] mb-5 sm:mb-6 shadow-sm">
                        <Activity size={16} className="text-[#34B6D8]" />
                        Tiempo Real
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-[1.1] text-[#0A3866] tracking-tight">
                        Monitoreo Inteligente del{' '}
                        <br className="hidden sm:block" />
                        <span className="text-slate-400">Clima Laboral</span>
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4 font-medium">
                        Visualiza el estado de la convivencia en tu empresa con dashboards actualizados en tiempo real.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="flex flex-col gap-4 sm:gap-5 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

                        {/* === CARD 1: Area Chart === */}
                        <div data-animate="slide-right" className="delay-100 bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col group hover:border-[#1A71B8]/30 hover:shadow-[0_20px_50px_rgba(10,56,102,0.07)] transition-all duration-500 hover:-translate-y-1">
                            {/* Cabecera con KPI (Mantenida) */}
                            <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Activity size={16} className="text-[#1A71B8]" />
                                        <h4 className="font-bold text-base text-[#0A3866]">Evolución Clima Laboral</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Puntaje mensual promedio</p>
                                </div>
                                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-sm font-bold px-3 py-1.5 rounded-full">
                                    <TrendingUp size={14} />
                                    +15.2%
                                </div>
                            </div>
                            
                            {/* Gráfico Estilizado */}
                            <div className="flex-1 w-full min-w-0 min-h-[220px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={dataArea} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorClima" x1="0" y1="0" x2="0" y2="1">
                                                {/* Gradiente más sutil */}
                                                <stop offset="5%" stopColor="#1A71B8" stopOpacity={0.15} />
                                                <stop offset="95%" stopColor="#1A71B8" stopOpacity={0.01} />
                                            </linearGradient>
                                        </defs>
                                        {/* Cuadrícula más suave */}
                                        <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                                        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                                        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Area 
                                            type="monotone" 
                                            dataKey="value" 
                                            stroke="#1A71B8" 
                                            fillOpacity={1} 
                                            fill="url(#colorClima)" 
                                            strokeWidth={2} // Línea más fina
                                            dot={false} // Eliminamos los puntos fijos para un look más limpio
                                            activeDot={{ r: 5, fill: '#1A71B8', stroke: '#fff', strokeWidth: 2 }} 
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* === CARD 2: Donut Chart === */}
                        <div data-animate="slide-left" className="delay-200 bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col group hover:border-[#1A71B8]/30 hover:shadow-[0_20px_50px_rgba(10,56,102,0.07)] transition-all duration-500 hover:-translate-y-1">
                            {/* Cabecera (Mantenida) */}
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldCheck size={16} className="text-[#1A71B8]" />
                                <h4 className="font-bold text-base text-[#0A3866]">Estado de Casos</h4>
                            </div>
                            <p className="text-sm text-slate-500 mb-4">Seguimiento en tiempo real • {totalCasos} casos totales</p>

                            <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
                                {/* Donut con paleta profesional */}
                                <div className="relative w-[180px] h-[180px] shrink-0">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={dataPie}
                                                innerRadius={60} // Donut un poco más fino
                                                outerRadius={78}
                                                paddingAngle={3}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {dataPie.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS_PROFESSIONAL[index % COLORS_PROFESSIONAL.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip content={<CustomTooltip />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                        {/* Tipografía más elegante */}
                                        <span className="text-3xl font-light text-[#0A3866]">{porcentajeResueltos}%</span>
                                    </div>
                                </div>

                                {/* Legend as KPI cards (Mantenida estructura original) */}
                                <div className="grid grid-cols-2 gap-3 flex-1 w-full">
                                    {dataPie.map((item, idx) => (
                                        <div key={idx} className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                                            <div className="flex items-center gap-2 mb-1">
                                                {/* Marcador cuadrado en lugar de redondo (más ejecutivo) */}
                                                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: COLORS_PROFESSIONAL[idx] }}></div>
                                                <span className="text-xs text-slate-500 font-medium truncate">{item.name}</span>
                                            </div>
                                            <span className="text-xl font-bold text-[#0A3866]">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === CARD 3: Bar Chart === */}
                    <div data-animate="slide-up" className="delay-300 bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col group hover:border-[#1A71B8]/30 hover:shadow-[0_20px_50px_rgba(10,56,102,0.07)] transition-all duration-500 hover:-translate-y-1 w-full">
                        <div className="flex items-start justify-between mb-5 sm:mb-6 gap-4 flex-wrap">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <AlertTriangle size={16} className="text-amber-500" />
                                    <h4 className="font-bold text-base text-[#0A3866]">Tipología de Alertas</h4>
                                </div>
                                <p className="text-sm text-slate-500">Distribución por categoría de riesgo</p>
                            </div>
                            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 text-sm font-bold px-3 py-1.5 rounded-full">
                                <BarChart3 size={14} />
                                {totalAlertas} alertas
                            </div>
                        </div>
                        
                        {/* Gráfico Estilizado */}
                        <div className="w-full h-[200px] sm:h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={dataBar} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="4 4" horizontal={true} vertical={false} stroke="#f1f5f9" />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={90} stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                                    {/* Cursor de hover más sutil */}
                                    <Tooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
                                    {/* Barras monocromáticas corporativas y radio más pequeño */}
                                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
                                        {dataBar.map((entry, index) => (
                                            <Cell key={`bar-${index}`} fill={index === 0 ? '#1A71B8' : '#94A3B8'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonitoringSection;