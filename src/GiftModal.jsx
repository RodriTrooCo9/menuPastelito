import React, { useEffect, useState } from 'react';
import { X, Heart, Star, Sparkles, Gift, Camera, Music, ArrowDown, Film } from 'lucide-react';
import recuerdo1 from './assets/recuerdo1.jpg';
import recuerdo2 from './assets/recuerdo2.jpg';
import recuerdo3 from './assets/recuerdo3.jpg';
import recuerdo4 from './assets/recuerdo4.jpg';
import recuerdo5 from './assets/recuerdo5.jpg';
import recuerdo6 from './assets/recuerdo6.jpg'; // Donut
import recuerdo7 from './assets/recuerdo7.jpg'; // Sweet
import paseoLuces from './assets/paseo_luces.jpg';
import plazaNoche from './assets/plaza_noche.jpg';
import gatitoDuerme from './assets/gatito_duerme.jpg';
import angelAnime from './assets/angel_anime.jpg';
import espacioArte from './assets/espacio_arte.jpg';
import chikawa1 from './assets/chikawa1.jpg';
import chikawa3 from './assets/chikawa3.jpg';
import chikawa4 from './assets/chikawa4.jpg';
import chikawa5 from './assets/chikawa5.jpg';
import chikawa6 from './assets/chikawa6.jpg';
import chiwawa2 from './assets/chiwawa2.jpg';
import coptel from './assets/coptel.jpg';
import favorita1 from './assets/favorita1.jpg';
import furina from './assets/furina.jpg';
import importante from './assets/importante.jpg';
import hachiware from './assets/hachiware.jpg';
import hachiware2 from './assets/hachiware2.jpg';
import hachiware3 from './assets/hachiware3.jpg';
import leoAndYou from './assets/leo and you .jpg';
import leoAndYou2 from './assets/leo and you2.jpg';
import leo from './assets/leo.jpg';
import leo2 from './assets/leo2.jpg';
import leo3 from './assets/leo3.jpg';
import leo4 from './assets/leo4.jpg';
import leo6 from './assets/leo6.jpg';
import leouwu from './assets/leouwu.jpg';
import nicol1 from './assets/nicol1.jpg';
import nicol2 from './assets/nicol2.jpg';
import nicol3 from './assets/nicol3.jpg';
import nicol4 from './assets/nicol4.jpg';
import pastelito1 from './assets/pastelito1.jpg';
import primera from './assets/primera.jpg';
import primera2 from './assets/primera2.jpg';
import segunda from './assets/segunda.jpg';


const GiftModal = ({ onClose }) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-stone-900/95 backdrop-blur-xl overflow-y-auto animate-[fadeIn_0.5s_ease-out]">

            <div className="fixed top-6 right-6 z-[110]">
                <button
                    onClick={onClose}
                    className="p-3 bg-white hover:bg-rose-50 rounded-full text-rose-500 shadow-lg transition-transform hover:scale-110 cursor-pointer border-2 border-rose-100"
                >
                    <X size={28} strokeWidth={2.5} />
                </button>
            </div>

            <div className={`max-w-5xl mx-auto min-h-screen py-20 px-4 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

                <div className="bg-[#fcfaf7] rounded-t-3xl shadow-2xl overflow-hidden relative border-b-8 border-rose-200">

                    <div className="absolute top-2 left-2 right-2 h-[calc(100%-16px)] border-2 border-dashed border-stone-300 rounded-3xl pointer-events-none"></div>

                    <div className="p-12 md:p-24 text-center relative z-10">
                        <div className="absolute top-10 left-10 animate-bounce delay-700">
                            <Star size={32} className="text-yellow-400 fill-current" />
                        </div>
                        <div className="absolute top-20 right-20 animate-spin-slow text-rose-300">
                            <Sparkles size={48} />
                        </div>

                        <div className="inline-block p-6 rounded-full bg-rose-50 shadow-inner mb-8 transform hover:scale-110 transition-transform duration-500">
                            <Gift size={64} className="text-rose-500" />
                        </div>
                        <h1 className="font-['Dancing_Script'] text-6xl md:text-8xl text-rose-900 mb-6 drop-shadow-sm">
                            Para Ti, Dulce Pastelito
                        </h1>
                        <p className="font-['Lora'] text-xl text-stone-600 italic max-w-lg mx-auto leading-relaxed">
                            "Una colección de instantes, sonrisas y el brillo eterno de tus ojos..."
                        </p>

                        <div className="mt-12 animate-pulse text-rose-300 flex justify-center">
                            <ArrowDown size={32} />
                        </div>
                    </div>


                    <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-100 to-transparent rounded-br-full opacity-60"></div>
                    <div className="absolute bottom-0 right-0 w-52 h-52 bg-gradient-to-tl from-pink-100 to-transparent rounded-tl-full opacity-60"></div>
                </div>



                <div className="bg-[#fff0f5] shadow-2xl relative pattern-grid-lg pb-24">


                    <div className="p-8 md:p-16 flex flex-col items-center">
                        <h2 className="font-['Caveat'] text-5xl text-rose-700 mb-12 text-center">Nuestros Recuerdos Colgantes</h2>


                        <div className="w-full relative h-64 mb-12 hidden md:block">
                            <div className="absolute top-0 left-0 w-full h-1 bg-stone-400 shadow-sm"></div>


                            <div className="absolute top-1 left-[10%] origin-top animate-swing" style={{ animationDuration: '3s' }}>
                                <div className="h-8 w-0.5 bg-stone-300 mx-auto"></div>
                                <div className="bg-white p-2 pb-8 shadow-md rotate-2 w-40 transform hover:scale-110 transition-transform">
                                    <img src={recuerdo1} className="w-full h-32 object-cover" />
                                </div>
                                <div className="w-2 h-8 bg-rose-300/50 absolute top-6 left-1/2 -translate-x-1/2 -rotate-45"></div>
                            </div>


                            <div className="absolute top-1 left-[40%] origin-top animate-swing" style={{ animationDuration: '4s' }}>
                                <div className="h-12 w-0.5 bg-stone-300 mx-auto"></div>
                                <div className="bg-white p-2 pb-8 shadow-md -rotate-1 w-48 transform hover:scale-110 transition-transform">
                                    <img src={nicol1} className="w-full h-40 object-cover" />
                                </div>
                                <div className="w-2 h-8 bg-blue-300/50 absolute top-10 left-1/2 -translate-x-1/2 rotate-45"></div>
                            </div>


                            <div className="absolute top-1 left-[75%] origin-top animate-swing" style={{ animationDuration: '5s' }}>
                                <div className="h-4 w-0.5 bg-stone-300 mx-auto"></div>
                                <div className="bg-white p-2 pb-8 shadow-md rotate-3 w-40 transform hover:scale-110 transition-transform">
                                    <img src={recuerdo5} className="w-full h-32 object-cover" />
                                </div>
                                <div className="w-2 h-8 bg-yellow-300/50 absolute top-2 left-1/2 -translate-x-1/2 -rotate-12"></div>
                            </div>
                        </div>


                        <div className="flex flex-wrap justify-center gap-4 md:hidden mb-8">
                            <img src={recuerdo1} className="w-32 h-32 object-cover rotate-3 rounded-lg border-4 border-white shadow-md" />
                            <img src={angelAnime} className="w-32 h-32 object-cover -rotate-2 rounded-lg border-4 border-white shadow-md" />
                            <img src={recuerdo5} className="w-32 h-32 object-cover rotate-1 rounded-lg border-4 border-white shadow-md" />
                        </div>

                        <p className="font-['Lora'] text-xl text-stone-700 text-center max-w-2xl px-4">
                            "Cada foto congelada en el tiempo es un segundo que late para siempre. Aquí están colgados los suspiros que me robaste."
                        </p>
                    </div>



                    <div className="bg-white py-16 px-4 md:px-12 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-8 bg-rose-200 -skew-y-1 z-10"></div>

                        <h3 className="text-center font-['Dancing_Script'] text-5xl text-gray-800 mb-12 relative z-20">Galería de Momentos</h3>

                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

                            {/* --- Column 1 --- */}
                            <div className="break-inside-avoid relative group transform hover:rotate-1 transition-transform">
                                <div className="bg-white p-3 pb-8 shadow-xl rotate-1 rounded ">
                                    <div className="w-24 h-6 bg-rose-200/50 absolute -top-3 left-1/2 -translate-x-1/2 rotate-2 shadow-sm z-10"></div>
                                    <img src={nicol4} className="w-full grayscale-[10%] group-hover:grayscale-0 transition-all" />
                                    <p className="font-['Caveat'] text-2xl text-center text-gray-600 mt-2">Dulzura</p>
                                </div>
                            </div>

                            <div className="break-inside-avoid relative group transform hover:-rotate-1 transition-transform">
                                <img src={chikawa1} className="w-full rounded-2xl shadow-md border-4 border-white" />
                            </div>

                            <div className="break-inside-avoid bg-yellow-50 p-6 rounded-xl text-center shadow-sm border-2 border-dashed border-yellow-200 flex flex-col items-center justify-center">
                                <Star className="text-yellow-400 mb-2 animate-spin-slow" size={32} />
                                <span className="font-['Caveat'] text-xl text-gray-600">"Cada día es más bonito si estás tú..."</span>
                            </div>

                            <div className="break-inside-avoid relative group transform hover:scale-105 transition-transform">
                                <img src={nicol2} className="w-full rounded-lg shadow-md grayscale-[20%] hover:grayscale-0 transition-all border-b-8 border-white" />
                            </div>

                            {/* --- Column 2 --- */}
                            <div className="break-inside-avoid relative group">
                                <div className="absolute top-2 right-2 z-10 text-4xl animate-bounce">✨</div>
                                <img src={plazaNoche} className="w-full rounded-3xl shadow-lg border-4 border-white rotate-2" />
                            </div>

                            <div className="break-inside-avoid relative group transform hover:rotate-2 transition-transform">
                                <div className="bg-white p-2 pb-6 shadow-lg -rotate-2 rounded-sm border border-gray-100">
                                    <img src={gatitoDuerme} className="w-full h-48 object-cover" />
                                    <div className="text-center font-['Dancing_Script'] text-xl text-gray-500 mt-2">Zzz...</div>
                                </div>
                            </div>

                            <div className="break-inside-avoid relative group"><img src={hachiware} className="w-full rounded-full border-4 border-rose-100 shadow-xl p-2 bg-white" /></div>

                            <div className="break-inside-avoid relative group transform hover:scale-105 transition-transform">
                                <img src={importante} className="w-full rounded-lg shadow-md border-8 border-white" />
                            </div>

                            {/* --- Column 3 --- */}
                            <div className="break-inside-avoid bg-rose-100 p-4 rounded-lg text-center flex flex-col items-center justify-center rotate-1">
                                <Heart className="text-rose-500 animate-pulse fill-current" size={40} />
                                <span className="font-['Dancing_Script'] mt-2 text-rose-800 text-2xl">miau</span>
                            </div>

                            <div className="break-inside-avoid relative group transform hover:-rotate-1 transition-transform">
                                <div className="bg-white p-3 pb-8 shadow-xl rotate-1 rounded relative overflow-hidden">
                                    <div className="w-32 h-8 bg-blue-100/50 absolute -top-3 -left-8 -rotate-12 shadow-sm z-10"></div>
                                    <img src={recuerdo2} className="w-full" />
                                    <p className="font-['Caveat'] text-xl text-center text-gray-500 mt-2">Momentos</p>
                                </div>
                            </div>

                            <div className="break-inside-avoid relative group"><img src={recuerdo4} className="w-full rounded-xl shadow-md hover:rotate-2 transition-transform border-4 border-rose-50" /></div>

                            <div className="break-inside-avoid relative group transform hover:scale-105 transition-transform">
                                <img src={leo} className="w-full rounded-lg shadow-md grayscale hover:grayscale-0 transition-all" />
                            </div>

                            <div className="break-inside-avoid relative group"><img src={chikawa3} className="w-full rounded-lg shadow-md border-2 border-stone-200" /></div>


                            {/* --- Column 4 --- */}
                            <div className="break-inside-avoid relative group transform hover:rotate-2 transition-transform">
                                <div className="bg-white p-2 rounded-xl shadow-lg">
                                    <img src={recuerdo6} className="w-full rounded-lg" />
                                </div>
                            </div>

                            <div className="break-inside-avoid relative group">
                                <div className="absolute -top-3 -right-3 z-20 text-3xl">🐱</div>
                                <img src={leo6} className="w-full rounded-full border-8 border-white shadow-lg" />
                            </div>

                            <div className="break-inside-avoid bg-white p-6 rounded-lg shadow-md border-t-4 border-rose-400 text-center">
                                <span className="font-['Caveat'] text-2xl text-gray-700">"Eres mi lugar feliz"</span>
                            </div>

                            <div className="break-inside-avoid relative group transform hover:-rotate-2 transition-transform">
                                <div className="bg-white p-3 pb-10 shadow-xl -rotate-1 rounded-sm">
                                    <div className="w-16 h-16 rounded-full bg-rose-500/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Heart className="text-rose-500 fill-current" />
                                    </div>
                                    <img src={recuerdo7} className="w-full" />
                                </div>
                            </div>

                            <div className="break-inside-avoid relative group"><img src={pastelito1} className="w-full rounded-lg shadow-md border-4 border-white" /></div>

                        </div>
                    </div>


                    <div className="bg-stone-900 py-12 relative overflow-hidden">
                        <h3 className="text-center text-white font-['Caveat'] text-3xl mb-8 flex items-center justify-center gap-2">
                            <Film /> Cinta de Recuerdos <Film />
                        </h3>

                        <div className="flex gap-4 overflow-x-auto pb-8 px-4 snap-x custom-scrollbar">
                            {[
                                recuerdo1, recuerdo2, recuerdo3, recuerdo4, recuerdo5, recuerdo6, recuerdo7,
                                paseoLuces, plazaNoche, gatitoDuerme, angelAnime, espacioArte,
                                chikawa1, chikawa3, chikawa4, chikawa5, chikawa6,
                                chiwawa2, coptel, favorita1, furina, importante,
                                hachiware, hachiware2, hachiware3,
                                leoAndYou, leoAndYou2, leo, leo2, leo3, leo4, leo6, leouwu,
                                nicol1, nicol2, nicol3, nicol4,
                                pastelito1, primera, primera2, segunda
                            ].map((img, idx) => (
                                <div key={idx} className="flex-shrink-0 w-64 h-48 bg-black p-2 rounded shadow-lg relative snap-center transform hover:scale-105 transition-transform">

                                    <div className="absolute top-0 left-0 w-full h-4 flex justify-between px-1">
                                        {[...Array(8)].map((_, i) => <div key={i} className="w-2 h-3 bg-stone-800 rounded-sm mt-0.5"></div>)}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-4 flex justify-between px-1">
                                        {[...Array(8)].map((_, i) => <div key={i} className="w-2 h-3 bg-stone-800 rounded-sm mb-0.5"></div>)}
                                    </div>

                                    <img src={img} className="w-full h-full object-cover border border-stone-700 opacity-90 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#fcfaf7] p-12 md:p-24 text-center relative border-t-8 border-rose-300">
                        <div className="max-w-2xl mx-auto border-4 border-double border-rose-200 p-10 rounded-xl relative bg-white shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 rounded-full border border-rose-100 shadow-sm">
                                <Heart size={48} className="text-rose-500 animate-pulse" fill="#f43f5e" />
                            </div>
                            <p className="font-['Caveat'] text-4xl text-gray-700 leading-loose">
                                "Gracias por llenar mi 2025 (y todos los años que vienen) de colores que ni siquiera sabía que existían. Eres mi pastelito favorito."
                            </p>
                            <div className="mt-8 font-['Playfair_Display'] font-bold text-rose-800 text-xl tracking-widest uppercase">
                                - En todas las realidades en todos los universos solo TU, puedes hacer que lo entienda.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GiftModal;