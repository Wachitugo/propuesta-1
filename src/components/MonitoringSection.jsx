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
    { name: 'Resueltos', value: 400 },
    { name: 'En Proceso', value: 300 },
    { name: 'Investigación', value: 300 },
    { name: 'Pendientes', value: 200 },
];
const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

const dataBar = [
    { name: 'Acoso Laboral', value: 40 },
    { name: 'Violencia', value: 15 },
    { name: 'Acoso Sexual', value: 25 },
    { name: 'Discriminación', value: 30 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#0A3866] border border-[#1A71B8]/30 px-3 py-2 rounded-lg shadow-xl">
                <p className="text-white text-xs font-medium">{`${label ? label + ': ' : ''}${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const KPIBadge = ({ icon: Icon, label, value, trend, trendUp, color }) => (
    <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
            <Icon size={18} />
        </div>
        <div className="min-w-0">
            <p className="text-xs text-slate-500 font-medium truncate">{label}</p>
            <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-[#0A3866]">{value}</span>
                {trend && (
                    <span className={`inline-flex items-center gap-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded-full ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                        {trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                        {trend}
                    </span>
                )}
            </div>
        </div>
    </div>
);

const MonitoringSection = () => {
    const totalCasos = dataPie.reduce((sum, d) => sum + d.value, 0);

    return (
        <section id="monitoreo" className="py-24 bg-slate-50 overflow-hidden relative">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34B6D8]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A71B8]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
               
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] text-[#0A3866] tracking-tight">
                        Monitoreo Inteligente del<br className="hidden sm:block" />
                        <span className="text-slate-400">Clima Laboral</span>
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed px-4 font-medium">
                        Visualiza el estado de la convivencia en tu empresa con dashboards potenciados por IA, actualizados en tiempo real.
                    </p>
                </div>

                {/* Bento Grid: 2 arriba, 1 abajo centrada */}
                <div className="flex flex-col gap-5 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* === CARD 1: Area Chart === */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-7 flex flex-col group hover:border-[#1A71B8]/30 hover:shadow-[0_20px_50px_rgba(10,56,102,0.07)] transition-all duration-500 hover:-translate-y-1">
                        {/* Header with KPI */}
                        <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Activity size={16} className="text-[#1A71B8]" />
                                    <h4 className="font-bold text-base text-[#0A3866]">Evolución Clima Laboral</h4>
                                </div>
                                <p className="text-sm text-slate-500">Puntaje mensual promedio • IA Analysis</p>
                            </div>
                            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-sm font-bold px-3 py-1.5 rounded-full">
                                <TrendingUp size={14} />
                                +15.2%
                            </div>
                        </div>
                        <div className="flex-1 w-full min-w-0 min-h-[220px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataArea} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorClima" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1A71B8" stopOpacity={0.25} />
                                            <stop offset="95%" stopColor="#1A71B8" stopOpacity={0.02} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={8} />
                                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dx={-5} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="value" stroke="#1A71B8" fillOpacity={1} fill="url(#colorClima)" strokeWidth={2.5} dot={{ fill: '#1A71B8', strokeWidth: 0, r: 3 }} activeDot={{ r: 6, fill: '#1A71B8', stroke: '#fff', strokeWidth: 2 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* === CARD 2: Donut Chart === */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-7 flex flex-col group hover:border-[#1A71B8]/30 hover:shadow-[0_20px_50px_rgba(10,56,102,0.07)] transition-all duration-500 hover:-translate-y-1">
                        <div className="flex items-center gap-2 mb-1">
                            <ShieldCheck size={16} className="text-[#1A71B8]" />
                            <h4 className="font-bold text-base text-[#0A3866]">Estado de Casos</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-4">Seguimiento en tiempo real • {totalCasos} casos totales</p>

                        <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
                            {/* Donut */}
                            <div className="relative w-[180px] h-[180px] shrink-0">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={dataPie}
                                            innerRadius={55}
                                            outerRadius={80}
                                            paddingAngle={4}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {dataPie.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <span className="text-2xl font-black text-[#0A3866]">85%</span>
                                    <span className="block text-[10px] text-slate-500 font-semibold">Resueltos</span>
                                </div>
                            </div>

                            {/* Legend as KPI cards */}
                            <div className="grid grid-cols-2 gap-3 flex-1 w-full">
                                {dataPie.map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx] }}></div>
                                            <span className="text-xs text-slate-500 font-medium">{item.name}</span>
                                        </div>
                                        <span className="text-xl font-bold text-[#0A3866]">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* === CARD 3: Bar Chart — full width abajo === */}
                    <div className="bg-white border border-slate-200/80 rounded-3xl p-7 flex flex-col group hover:border-[#1A71B8]/30 hover:shadow-[0_20px_50px_rgba(10,56,102,0.07)] transition-all duration-500 hover:-translate-y-1 w-full">
                        <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <AlertTriangle size={16} className="text-amber-500" />
                                    <h4 className="font-bold text-base text-[#0A3866]">Tipología de Alertas</h4>
                                </div>
                                <p className="text-sm text-slate-500">Distribución por categoría de riesgo</p>
                            </div>
                            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 text-sm font-bold px-3 py-1.5 rounded-full">
                                <BarChart3 size={14} />
                                110 alertas
                            </div>
                        </div>
                        <div className="w-full h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={dataBar} margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={100} stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip cursor={{ fill: 'rgba(26,113,184,0.04)' }} content={<CustomTooltip />} />
                                    <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
                                        {dataBar.map((entry, index) => (
                                            <Cell key={`bar-${index}`} fill={index === 0 ? '#1A71B8' : index === 1 ? '#34B6D8' : index === 2 ? '#f59e0b' : '#0A3866'} />
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
