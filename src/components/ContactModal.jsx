import { useState, useEffect } from 'react';
import {
    X, Send, CheckCircle, Building2, User,
    Mail, Phone, MessageSquare, Briefcase, ShieldCheck
} from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({
        nombre: '',
        cargo: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            setTimeout(() => setSubmitted(false), 300);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* Backdrop con un tono azul más profundo e inmersivo */}
            <div
                className="absolute inset-0 bg-[#0A3866]/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-xl max-h-[95vh] overflow-y-auto transform transition-all">

                {/* Header con gradiente sutil */}
                <div className="sticky top-0 bg-gradient-to-b from-blue-50/90 to-white/95 backdrop-blur-md border-b border-blue-100/50 px-8 pt-8 pb-5 flex items-start justify-between z-10">
                    <div>

                        <h2 className="text-2xl font-black text-[#0A3866] leading-tight">
                            Transforma el clima de tu equipo
                        </h2>
                        <p className="text-sm text-slate-500 mt-1.5">
                            Solicita una demo y descubre cómo gestionar la convivencia laboral de forma segura.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center transition-all shrink-0 ml-4 shadow-sm"
                        aria-label="Cerrar modal"
                    >
                        <X size={18} className="text-slate-500" />
                    </button>
                </div>

                <div className="px-8 pb-8 pt-6">
                    {submitted ? (
                        <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in duration-300">
                            <div className="w-20 h-20 rounded-full bg-green-50 border-8 border-green-100 flex items-center justify-center mb-2">
                                <CheckCircle size={36} className="text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[#0A3866] mb-2">¡Solicitud recibida con éxito!</h3>
                                <p className="text-slate-500 text-sm max-w-xs mx-auto">
                                    Un especialista en clima laboral revisará tu información y te contactará en breve.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="mt-4 bg-[#1A71B8] hover:bg-[#0A3866] text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#1A71B8]/20"
                            >
                                Entendido
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                            {/* Fila 1: Nombre + Cargo */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Nombre completo</label>
                                    <div className="relative group">
                                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A71B8] transition-colors" />
                                        <input
                                            type="text"
                                            name="nombre"
                                            required
                                            placeholder="Ej. Camila Rojas"
                                            value={form.nombre}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1A71B8] focus:ring-4 focus:ring-[#1A71B8]/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cargo</label>
                                    <div className="relative group">
                                        <Briefcase size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A71B8] transition-colors" />
                                        <input
                                            type="text"
                                            name="cargo"
                                            placeholder="Ej. HR Manager"
                                            value={form.cargo}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1A71B8] focus:ring-4 focus:ring-[#1A71B8]/10 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Fila 2: Empresa + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Empresa</label>
                                    <div className="relative group">
                                        <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A71B8] transition-colors" />
                                        <input
                                            type="text"
                                            name="empresa"
                                            required
                                            placeholder="Nombre de tu organización"
                                            value={form.empresa}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1A71B8] focus:ring-4 focus:ring-[#1A71B8]/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email corporativo</label>
                                    <div className="relative group">
                                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A71B8] transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="tu@empresa.cl"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1A71B8] focus:ring-4 focus:ring-[#1A71B8]/10 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Fila 3: Teléfono */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Teléfono de contacto</label>
                                <div className="relative group">
                                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A71B8] transition-colors" />
                                    <input
                                        type="tel"
                                        name="telefono"
                                        placeholder="+56 9 1234 5678"
                                        value={form.telefono}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1A71B8] focus:ring-4 focus:ring-[#1A71B8]/10 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Fila 4: Mensaje */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">¿En qué podemos ayudarte? (opcional)</label>
                                <div className="relative group">
                                    <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-slate-400 group-focus-within:text-[#1A71B8] transition-colors" />
                                    <textarea
                                        name="mensaje"
                                        rows={3}
                                        placeholder="Ej: Buscamos un canal de denuncias, evaluar el clima laboral..."
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#1A71B8] focus:ring-4 focus:ring-[#1A71B8]/10 transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Botón y Trust Badge */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full group inline-flex items-center justify-center gap-2 bg-[#1A71B8] hover:bg-[#0A3866] text-white py-3.5 rounded-xl font-bold text-[15px] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A71B8]/25 active:scale-[0.98]"
                                >
                                    Agendar demostración
                                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                                </button>

                                <div className="mt-4 flex items-center justify-center gap-1.5 text-slate-400">
                                    <ShieldCheck size={14} className="text-emerald-500" />
                                    <p className="text-[11px] font-medium">
                                        Tus datos están protegidos y son estrictamente confidenciales.
                                    </p>
                                </div>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
