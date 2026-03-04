import React from 'react';

const DashboardPreview = () => {
    return (
        <section className="dashboard-preview" style={{ padding: '0 0 5rem', position: 'relative', marginTop: '-2rem' }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Window Frame */}
                <div style={{
                    background: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 100px -20px rgba(124, 58, 237, 0.15)',
                    overflow: 'hidden'
                }}>
                    {/* Header Bar */}
                    <div style={{
                        height: '40px',
                        background: '#f8fafc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        padding: '0 1rem',
                        borderBottom: '1px solid var(--color-border)'
                    }}>
                        {/* Dots */}
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></div>
                        </div>
                        {/* Address Bar */}
                        <div style={{
                            marginLeft: '20px',
                            background: '#e2e8f0',
                            height: '24px',
                            borderRadius: '4px',
                            width: '40%',
                            opacity: 0.5,
                            maxWidth: '200px'
                        }}></div>
                    </div>

                    {/* Content Area */}
                    <div className="dashboard-grid" style={{ padding: '2rem', minHeight: '300px', display: 'grid', gap: '1.5rem', background: '#f1f5f9' }}>

                        {/* Top Cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', width: '100%' }}>
                            {[1, 2, 3].map((item) => (
                                <div key={item} style={{
                                    background: '#ffffff',
                                    borderRadius: '8px',
                                    height: '140px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                    border: '1px solid var(--color-border)'
                                }}></div>
                            ))}
                        </div>

                        {/* Bottom Large Blocks */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%' }}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '8px',
                                height: '200px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                border: '1px solid var(--color-border)'
                            }}></div>

                            <div style={{
                                background: '#ffffff',
                                borderRadius: '8px',
                                height: '200px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                border: '1px solid var(--color-border)'
                            }}></div>
                        </div>

                    </div>
                    {/* Overlay Gradient for fade effect if needed, often not needed in light mode or just subtler */}
                    {/* <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100px',
                        background: 'linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 100%)',
                        pointerEvents: 'none'
                    }}></div> */}
                </div>
            </div>

            {/* Background Glow behind Dashboard */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '80%',
                background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
                maxWidth: '100vw'
            }}></div>
        </section>
    );
};

export default DashboardPreview;
