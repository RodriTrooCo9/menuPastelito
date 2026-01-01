import React from 'react';
import { X, Heart, Star, ArrowLeft, Candy, Cookie, Gift, Cake, Camera, Sparkles } from 'lucide-react';

const MonthEntry = ({ data, onClose }) => {
    if (!data) return <div className="p-10 text-center">Cargando...</div>;

    return (
        <div className="fixed inset-0 z-[9999] bg-[#fff0f5] overflow-y-auto font-serif selection:bg-rose-200 selection:text-rose-900 w-full h-full">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>

            {/* Ensure background color is solid to prevent transparency issues */}
            <div className="absolute inset-0 bg-[#fff0f5] z-0"></div>

            {/* --- Background Elements from Main Template --- */}
            <div className="fixed inset-0 opacity-40 pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#eecfd5 3px, transparent 3px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Scroll to top on mount logic could be added here if needed */}

            {/* Decorative Floating Sweets (Static for performance or same as App.jsx) */}
            <div className="fixed top-20 -left-10 md:left-10 w-32 md:w-48 opacity-80 pointer-events-none">
                <div className="w-full h-full bg-rose-200/20 rounded-full blur-xl absolute"></div>
            </div>

            {/* Navigation - Top Bar */}
            <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
                <button
                    onClick={onClose}
                    className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300 cursor-pointer font-['Caveat'] text-xl font-bold border-2 border-rose-100/50 group"
                >
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Volver al Diario</span>
                </button>

                {/* Right side decoration or redundant close */}
                <div className="flex gap-2">
                    {/* Optional: Add more controls here */}
                </div>
            </div>


            {/* Main Content Area */}
            <main className="relative max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8 z-10">

                {/* Paper Container */}
                <div className="bg-[#fdfbf7] w-full p-8 md:p-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rotate-0 md:rotate-1 relative transform transition-transform hover:rotate-0 border border-stone-100">

                    {/* Tape Effect */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/80 -rotate-2 shadow-sm backdrop-blur-sm border-l border-r border-white/40"></div>

                    {/* Dynamic Interactive Decorations from Data */}
                    {data.images && data.images[0] && (
                        <div className="absolute -left-4 md:-left-12 top-20 w-32 md:w-40 p-2 bg-white shadow-lg -rotate-6 hidden lg:block z-10 transition-transform hover:scale-110 hover:-rotate-3 duration-300">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-pink-200/50 -rotate-1"></div>
                            <img src={data.images[0]} alt="Memory 1" className="w-full h-auto filter sepia-[0.3]" />
                        </div>
                    )}

                    {data.images && data.images[2] && (
                        <div className="absolute -right-4 md:-right-16 bottom-40 w-36 md:w-48 p-2 bg-white shadow-lg rotate-6 hidden lg:block z-10 transition-transform hover:scale-110 hover:rotate-3 duration-300">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-blue-200/50 rotate-2"></div>
                            <img src={data.images[2]} alt="Memory 3" className="w-full h-auto grayscale-[0.2]" />
                        </div>
                    )}


                    {/* Article Content */}
                    <article className="prose prose-rose prose-lg max-w-none font-serif">
                        <header className="text-center mb-12">
                            <div className="inline-block p-3 rounded-full bg-rose-50 mb-4">
                                <Sparkles className="text-rose-400" size={24} />
                            </div>
                            <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl text-rose-900 mb-2 leading-tight">
                                {data.title}
                            </h1>
                            <div className="h-1 w-24 bg-rose-200 mx-auto mt-6 rounded-full"></div>
                        </header>

                        <div className="font-['Caveat'] text-2xl md:text-3xl leading-loose text-gray-700 space-y-8">
                            {data.paragraphs.map((paragraph, index) => (
                                <div key={index} className="relative">
                                    <p>{paragraph}</p>

                                    {/* Randomly insert images between paragraphs */}
                                    {index === 1 && data.images && data.images[1] && (
                                        <div className="md:float-right md:ml-8 mb-6 py-2">
                                            <div className="w-full md:w-56 rotate-2 p-2 bg-white shadow-md border border-gray-100 transform hover:scale-105 transition-all">
                                                <img src={data.images[1]} className="w-full h-auto object-cover" alt="Detalle" />
                                                <div className="text-center text-sm text-gray-400 mt-2 font-sans">Recuerdo</div>
                                            </div>
                                        </div>
                                    )}

                                    {index === 3 && data.images && data.images[3] && (
                                        <div className="md:float-left md:mr-8 mb-6 py-2">
                                            <div className="w-full md:w-48 -rotate-1 p-2 bg-white shadow-md border border-gray-100 transform hover:scale-105 transition-all">
                                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-teal-100/50"></div>
                                                <img src={data.images[3]} className="w-full h-auto object-cover" alt="Detalle" />
                                            </div>
                                        </div>
                                    )}

                                    {index === 2 && (
                                        <div className="my-10 flex justify-center items-center gap-4 opacity-60">
                                            <div className="h-px w-12 bg-rose-300"></div>
                                            <Star size={24} className="text-rose-400" fill="currentColor" />
                                            <div className="h-px w-12 bg-rose-300"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-dashed border-rose-200 pt-12">
                            <p className="font-['Caveat'] text-xl text-rose-400">Gracias por leer...</p>
                            <Heart className="text-rose-400 animate-pulse" size={32} fill="#fb7185" />
                        </div>

                    </article>
                </div>

            </main>
        </div>
    );
};

export default MonthEntry;
