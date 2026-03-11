import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';

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
    { name: 'Proceso', value: 300 },
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
            <div style={{ background: '#1e293b', border: '1px solid #334155', padding: '10px', borderRadius: '4px' }}>
                <p style={{ color: '#fff', fontSize: '0.8rem' }}>{`${label ? label + ' : ' : ''}${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const MonitoringSection = () => {
    return (
        <section style={{ padding: '0 0 5rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>Monitoreo en Tiempo Real</h2>
                    <p style={{ color: 'var(--color-text-secondary)', padding: '0 1rem' }}>Visualiza el estado de la convivencia en tu empresa con nuestros dashboards potenciados por IA.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                    {/* Chart 1: Area */}
                    <div className="card" style={{ padding: '1.5rem', height: '350px', display: 'flex', flexDirection: 'column', background: '#ffffff', borderColor: 'var(--color-border)' }}>
                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Evolución Clima Laboral</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Puntaje mensual promedio (IA Analysis)</p>
                        <div style={{ flex: 1, width: '100%', minWidth: 0 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataArea}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} vertical={false} />
                                    <XAxis dataKey="name" stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="value" stroke="#7c3aed" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Chart 2: Donut */}
                    <div className="card" style={{ padding: '1.5rem', height: '350px', display: 'flex', flexDirection: 'column', background: '#ffffff', borderColor: 'var(--color-border)' }}>
                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Estado de Casos</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Seguimiento en tiempo real</p>
                        <div style={{ flex: 1, position: 'relative', minWidth: 0 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dataPie}
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {dataPie.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: 'var(--color-text-secondary)' }} />
                                </PieChart>
                            </ResponsiveContainer>
                            {/* Center Text */}
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', textAlign: 'center' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>85%</span>
                            </div>
                        </div>
                    </div>

                    {/* Chart 3: Bar */}
                    <div className="card" style={{ padding: '1.5rem', height: '350px', display: 'flex', flexDirection: 'column', background: '#ffffff', borderColor: 'var(--color-border)' }}>
                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Tipología de Alertas</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Distribución por categoría de riesgo</p>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={dataBar} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--color-border)" opacity={0.5} />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={80} stroke="var(--color-text-secondary)" fontSize={10} tickLine={false} axisLine={false} />
                                    <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
                                    <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
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
