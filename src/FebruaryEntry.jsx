import React, { useEffect, useState } from 'react';
import { X, Heart, Star, ArrowLeft, Cloud, Music, Sparkles } from 'lucide-react';

const FebruaryEntry = ({ data, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    if (!data) return null;

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-x-hidden font-serif">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
      `}</style>

            {/* Floating Hearts Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div key={i}
                        className="absolute animate-pulse text-pink-200/40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            transform: `scale(${0.5 + Math.random()})`
                        }}>
                        <Heart size={20 + Math.random() * 40} fill="currentColor" />
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
                <button
                    onClick={onClose}
                    className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer font-['Dancing_Script'] text-2xl font-bold border border-pink-100 group"
                >
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Volver con Amor</span>
                </button>
            </div>

            <main className={`relative max-w-5xl mx-auto py-24 px-4 sm:px-6 z-10 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>

                {/* Header Section */}
                <header className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl -z-10"></div>
                    <h1 className="font-['Dancing_Script'] text-5xl md:text-7xl text-rose-800 drop-shadow-sm mb-4">
                        {data.title}
                    </h1>
                    <div className="flex justify-center gap-2 text-rose-400">
                        <Heart size={16} fill="currentColor" />
                        <Heart size={20} fill="currentColor" />
                        <Heart size={16} fill="currentColor" />
                    </div>
                </header>

                {/* Masonry-style Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* Column 1: Text & Small Images */}
                    <div className="space-y-8">
                        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl border border-white/50 hover:shadow-2xl transition-shadow duration-500">
                            <p className="font-['Lora'] text-lg text-gray-700 leading-relaxed first-letter:text-4xl first-letter:text-rose-500 first-letter:font-['Dancing_Script']">
                                {data.paragraphs[0]}
                            </p>
                        </div>

                        {data.images[0] && (
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                                <img src={data.images[0]} alt="Momento Febrero" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-linear-to-t from-rose-900/40 to-transparent"></div>
                            </div>
                        )}

                        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border-l-4 border-pink-300">
                            <p className="font-['Lora'] text-lg text-gray-700 leading-relaxed">
                                {data.paragraphs[1]}
                            </p>
                        </div>

                        {data.paragraphs[3] && (
                            <div className="bg-linear-to-br from-rose-100 to-pink-50 p-8 rounded-full shadow-inner text-center">
                                <p className="font-['Dancing_Script'] text-2xl text-rose-800 leading-relaxed">
                                    "{data.paragraphs[3]}"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Column 2: Large Images & More Text */}
                    <div className="space-y-8 mt-12 md:mt-0">

                        {data.images[1] && (
                            <div className="relative group p-3 bg-white shadow-xl rotate-2 hover:-rotate-1 transition-transform duration-500 max-w-sm mx-auto">
                                <img src={data.images[1]} alt="Momento Febrero" className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" />
                                <div className="text-center font-['Dancing_Script'] text-gray-500 mt-2 text-xl">Dulces Recuerdos</div>
                            </div>
                        )}

                        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-tl-[3rem] rounded-br-[3rem] shadow-xl border border-white/50">
                            <p className="font-['Lora'] text-lg text-gray-700 leading-relaxed">
                                {data.paragraphs[2]}
                            </p>
                        </div>

                        {data.images[2] && (
                            <div className="grid grid-cols-2 gap-4">
                                <img src={data.images[2]} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
                                {data.images[3] && <img src={data.images[3]} className="rounded-lg shadow-md hover:scale-105 transition-transform mt-8" />}
                            </div>
                        )}

                        {data.paragraphs[4] && (
                            <div className="bg-rose-500 text-white p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform">
                                <Sparkles className="mb-4 text-yellow-200" />
                                <p className="font-['Lora'] text-lg leading-relaxed italic">
                                    {data.paragraphs[4]}
                                </p>
                            </div>
                        )}

                    </div>

                </div>

                {/* Footer */}
                <div className="mt-20 text-center pb-10">
                    <div className="inline-block p-4 bg-white rounded-full shadow-lg animate-bounce">
                        <Heart fill="#e11d48" className="text-rose-600" size={32} />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default FebruaryEntry;
