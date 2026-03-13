import React from 'react';

const DashboardPreview = () => {
    return (
        <section className="pb-20 relative -mt-8">
            <div className="container mx-auto px-6 relative z-10">
                {/* Window Frame */}
                <div className="bg-white border border-border rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),0_0_100px_-20px_rgba(124,58,237,0.15)] overflow-hidden">
                    {/* Header Bar */}
                    <div className="h-10 bg-slate-50 flex items-center justify-start px-4 border-b border-border">
                        {/* Dots */}
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        {/* Address Bar */}
                        <div className="ml-5 bg-slate-200 h-6 rounded w-2/5 opacity-50 max-w-[200px]"></div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 min-h-[300px] grid gap-6 bg-slate-100">

                        {/* Top Cards */}
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 w-full">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-lg h-[140px] shadow-sm border border-border"></div>
                            ))}
                        </div>

                        {/* Bottom Large Blocks */}
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 w-full">
                            <div className="bg-white rounded-lg h-[200px] shadow-sm border border-border"></div>
                            <div className="bg-white rounded-lg h-[200px] shadow-sm border border-border"></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Background Glow behind Dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)] z-0 pointer-events-none max-w-[100vw]"></div>
        </section>
    );
};

export default DashboardPreview;
