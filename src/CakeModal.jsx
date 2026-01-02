import React, { useState } from 'react';
import { X, Heart, Mail, Sparkles, Cat, Flower, Cake, Star, Music, Coffee, Camera } from 'lucide-react';
import recuerdo3 from './assets/recuerdo3.jpg';
import gatitoDuerme from './assets/gatito_duerme.jpg';
import paseoLuces from './assets/paseo_luces.jpg';
import angelAnime from './assets/angel_anime.jpg';
import nicol from './assets/nicol1.jpg';
import nicol2 from './assets/nicol2.jpg';
import nicol3 from './assets/nicol3.jpg';
import favorita1 from './assets/favorita1.jpg';
import chikawa3 from './assets/chikawa3.jpg';
import primera from './assets/primera.jpg';
import primera2 from './assets/primera2.jpg';
import segunda from './assets/segunda.jpg';
import leouwu from './assets/leouwu.jpg';
import nicol4 from './assets/nicol4.jpg';

const CakeModal = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-0 z-[100] bg-stone-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.5s_ease-out] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 text-rose-200/50 animate-bounce delay-100"><Cat size={60} /></div>
                <div className="absolute bottom-20 right-20 text-yellow-200/50 animate-pulse delay-700"><Flower size={80} /></div>
                <div className="absolute top-1/2 right-10 text-pink-200/50 animate-spin-slow"><Cake size={45} /></div>
                <div className="absolute bottom-10 left-1/3 text-blue-200/50 animate-float"><Star size={40} /></div>
            </div>

            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-[120] p-3 bg-white/30 hover:bg-white rounded-full text-white hover:text-rose-500 transition-all shadow-lg backdrop-blur-sm transform hover:rotate-90 duration-300"
            >
                <X size={28} />
            </button>


            {!isOpen && (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer group relative transform transition-transform hover:scale-105 active:scale-95 duration-300"
                >
                    
                    <div className="absolute inset-0 bg-rose-400 rounded-lg blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

                    <div className="w-80 md:w-96 h-56 md:h-64 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-rose-300 z-10">
                        
                        <div className="absolute top-0 left-0 w-full h-full opacity-30"
                            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fb7185 0, #fb7185 2px, transparent 0, transparent 40%)', backgroundSize: '24px 24px' }}></div>

                       
                        <div className="z-10 bg-white p-5 rounded-full shadow-lg border-2 border-rose-100 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                            <Heart size={48} className="text-rose-500 fill-rose-500 animate-heartbeat" />
                        </div>

                        <div className="absolute bottom-6 text-rose-900 font-['Caveat'] text-3xl font-bold tracking-wide drop-shadow-sm">
                            🌸¡Ábreme! 🐱🍰🌸🌸
                        </div>
                    </div>

                    <div className="absolute -top-6 -right-6 text-yellow-400 animate-bounce"><Sparkles size={48} fill="currentColor" /></div>
                    <div className="absolute -bottom-4 -left-8 text-pink-300 animate-wiggle"><Cat size={36} /></div>
                </div>
            )}
            {isOpen && (
                <div className="relative w-full max-w-4xl bg-[#fff0f5] max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-[popIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)] border-8 border-white ring-4 ring-rose-200/50">

                 
                    <div className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#fda4af 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>

          
                    <div className="overflow-y-auto p-6 md:p-12 custom-scrollbar relative z-10">

                     
                        <div className="flex justify-between items-center mb-8 bg-white/50 p-4 rounded-xl border border-rose-100/50 backdrop-blur-sm">
                            <Flower className="text-rose-400 animate-spin-slow" size={32} />
                            <div className="flex gap-2 items-center">
                                <Cat size={24} className="text-gray-400" />
                                <span className="font-['Dancing_Script'] text-3xl text-rose-500 font-bold">Carta Especial</span>
                                <Cake size={24} className="text-pink-400" />
                            </div>
                            <Flower className="text-rose-400 animate-spin-slow" size={32} />
                        </div>

                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                       
                            <div className="md:col-span-7 prose prose-rose prose-lg font-['Caveat'] text-2xl md:text-3xl leading-relaxed text-gray-700">
                                <h2 className="font-['Dancing_Script'] text-5xl text-rose-600 mb-6 drop-shadow-sm">
                                    Hi Pastelito... 🍰 Nicol :3🐱
                                </h2>
                                <p>
                                        Como puedes ver, esta no es una carta común; es un pequeño universo que he pintado a mano para ti. Está llena de colores vibrantes, gatitos curiosos y destellos mágicos <Sparkles className="inline w-5 h-5 text-yellow-400" />, porque quería que estas líneas brillaran casi tanto como lo hacen tus ojos cuando sonríes.
                                    </p>

                                    <p>
                                        Quería escribirte rodeado de un jardín de <b className="text-rose-500">flores eternas</b> <Flower className="inline w-5 h-5 text-pink-400" /> y la suave compañía de estas <b className="text-rose-500">dulces</b> flores para confesarte algo inmenso: eres, sin duda alguna, mi coincidencia favorita en este y en cualquier otro multiverso.
                                    </p>

                                    <p>
                                        Imagina que cada palabra que lees aquí es un abrazo suave y azucarado. Gracias por ser ese "pastelito" perfecto en mi vida, esa porción de dulzura infinita que tiene el poder de disolver la amargura de cualquier día difícil. Eres la crema batida en el café de mi rutina <Coffee className="inline w-5 h-5 text-brown-400" />, el ingrediente secreto que hace que todo sepa a felicidad y ternura.
                                    </p>

                                    <p>
                                        Por favor, nunca dejes de ser tan auténtica, nunca pierdas esa esencia que te hace ser un postre para el alma. Y si alguna vez el mundo se vuelve gris o se olvida de ponerle azúcar a tu día, recuerda que aquí estaré yo (<Cat className="inline w-5 h-5 text-gray-500" />) para recordarte que eres la dulzura más valiosa que existe.
                                    </p>

                                <div className="mt-8 p-6 bg-white/60 rounded-xl border-2 border-dashed border-rose-200 text-center transform rotate-1 hover:rotate-0 transition-transform">
                                    <p className="font-bold text-rose-500 text-3xl">
                                        ¡Te quiero muchísimo pequeña pastelito
                                    </p>
                                    <div className="flex justify-center gap-4 mt-2 text-3xl">
                                        🐱 🌸 🧁 ✨
                                    </div>
                                </div>
                            </div>

                            
                            <div className="md:col-span-5 flex flex-col gap-6 items-center">

                       
                                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20 group w-full max-w-sm">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-200/80 -rotate-2 shadow-sm z-30 opacity-90 backdrop-blur-sm"></div>
                                    <div className="bg-white p-3 pb-20 shadow-2xl border border-gray-100 rounded-sm">
                                        <img src={nicol2} className="w-full h-64 object-cover filter contrast-110 rounded-sm border border-gray-100" alt="Instax" />
                                        <div className="absolute bottom-6 left-0 w-full text-center">
                                            <span className="font-['Dancing_Script'] text-3xl text-gray-600">Mi favorita</span>
                                            <div className="flex justify-center mt-1 gap-1">
                                                <Heart size={16} className="text-rose-400 fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20 group w-full max-w-sm">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-200/80 -rotate-2 shadow-sm z-30 opacity-90 backdrop-blur-sm"></div>
                                    <div className="bg-white p-3 pb-20 shadow-2xl border border-gray-100 rounded-sm">
                                        <img src={favorita1} className="w-full h-64 object-cover filter contrast-110 rounded-sm border border-gray-100" alt="Instax" />
                                        <div className="absolute bottom-6 left-0 w-full text-center">
                                            <span className="font-['Dancing_Script'] text-3xl text-gray-600">Concierto</span>
                                            <div className="flex justify-center mt-1 gap-1">
                                                <Heart size={16} className="text-rose-400 fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

            
                                <div className="grid grid-cols-2 gap-2 w-full mt-4">
                                    <div className="transform -rotate-2 hover:scale-110 transition-transform z-10">
                                        <img src={recuerdo3} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>
                                    <div className="transform rotate-2 hover:scale-110 transition-transform z-10 mt-4">
                                        <img src={paseoLuces} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>
                                    <div className="transform rotate-3 hover:scale-110 transition-transform z-10">
                                        <img src={angelAnime} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>
                                    <div className="transform rotate-3 hover:scale-110 transition-transform z-10">
                                        <img src={nicol} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>
                                    <div className="flex items-center justify-center bg-rose-100 rounded-lg shadow-inner transform -rotate-1">
                                        <Camera className="text-rose-400" />
                                    </div>
                                     <div className="transform rotate-3 hover:scale-110 transition-transform z-10">
                                        <img src={chikawa3} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>
                                      <div className="transform -rotate-2 hover:scale-110 transition-transform z-10">
                                        <img src={nicol3} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>
                                     <div className="transform rotate-3 hover:scale-110 transition-transform z-10">
                                        <img src={leouwu} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>

                                </div>
                                  <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20 group w-full max-w-sm">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-200/80 -rotate-2 shadow-sm z-30 opacity-90 backdrop-blur-sm"></div>
                                    <div className="bg-white p-3 pb-20 shadow-2xl border border-gray-100 rounded-sm">
                                        <img src={nicol4} className="w-full h-64 object-cover filter contrast-110 rounded-sm border border-gray-100" alt="Instax" />
                                        <div className="absolute bottom-6 left-0 w-full text-center">
                                            <span className="font-['Dancing_Script'] text-3xl text-gray-600">:p</span>
                                            <div className="flex justify-center mt-1 gap-1">
                                         
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 w-full mt-4">
                                      <div className="transform -rotate-2 hover:scale-110 transition-transform z-10">
                                        <img src={primera} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>
                                    <div className="transform rotate-2 hover:scale-110 transition-transform z-10 mt-4">
                                        <img src={segunda} className="rounded-lg shadow-md border-2 border-white" />
                                    </div>

                                </div>
                                

                                <div className="mt-4 animate-bounce-slow">
                                    <Cat size={64} className="text-gray-400 drop-shadow-md" />
                                </div>
                            </div>
                            

                        </div>

    
                        <div className="mt-12 text-center opacity-60 border-t border-rose-200 pt-4">
                            <p className="text-sm font-sans flex items-center justify-center gap-2">
                                <Music size={14} /> Enviado con mucho carino y amor (hachiware) UwU o.O
                            </p>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default CakeModal;