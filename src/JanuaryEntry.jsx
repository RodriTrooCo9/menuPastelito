import React from 'react';
import { X, Heart, Star } from 'lucide-react';
import recuerdo1 from './assets/recuerdo1.jpg';
import recuerdo2 from './assets/recuerdo2.jpg';
import recuerdo3 from './assets/recuerdo3.jpg';
import recuerdo4 from './assets/recuerdo4.jpg';
import recuerdo5 from './assets/recuerdo5.jpg';

const JanuaryEntry = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-200">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>

            {/* Wall Texture Overlay */}
            <div className="fixed inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/concrete-wall.png")` }}>
            </div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-50 p-3 bg-white/80 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
                <X size={24} />
            </button>

            <div className="min-h-screen py-20 px-4 md:px-8 flex justify-center items-start relative">

                {/* Main Paper Sheet */}
                <div className="bg-[#fdfbf7] max-w-3xl w-full p-8 md:p-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rotate-1 relative transform transition-transform hover:rotate-0">

                    {/* Tape Effect */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/80 -rotate-2 shadow-sm backdrop-blur-sm border-l border-r border-white/40"></div>

                    {/* Decorative Images (Scattered/Taped) */}
                    <div className="absolute -left-12 top-20 w-40 p-2 bg-white shadow-lg rotate-[-8deg] hidden lg:block z-10 transition-transform hover:scale-110 hover:rotate-[-5deg] duration-300">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-pink-200/50 -rotate-1"></div>
                        <img src={recuerdo1} alt="Memory" className="w-full h-auto filter sepia-[0.3]" />
                    </div>

                    <div className="absolute -right-16 bottom-40 w-48 p-2 bg-white shadow-lg rotate-6 hidden lg:block z-10 transition-transform hover:scale-110 hover:rotate-3 duration-300">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-blue-200/50 rotate-2"></div>
                        <img src={recuerdo3} alt="Memory" className="w-full h-auto grayscale-[0.2]" />
                    </div>


                    {/* Content */}
                    <article className="prose prose-stone prose-lg max-w-none font-serif">
                        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-center text-rose-900 mb-2 border-b-2 border-rose-100 pb-6">
                            ENERO: El Eco de tu Ausencia
                        </h1>

                        <div className="font-['Caveat'] text-2xl md:text-3xl leading-loose text-gray-700 space-y-8">
                            <p>
                                Enero no llegó como un inicio, sino como un invierno prolongado en las entrañas de mi espíritu. Fue un mes extraño, marcado por un vacío interno que inundaba mi alma como una marea silenciosa. Me sentía náufrago, solo, como si la vida misma me hubiera golpeado con brutalidad, dejándome únicamente con el consuelo helado de mirar a las estrellas. En su brillo distante buscaba respuestas, imaginando cómo te sentías, qué pensabas; proyectando mi anhelo en el firmamento.
                            </p>

                            <div className="float-right ml-6 mb-4 w-48 rotate-3 p-1 bg-white shadow inset-0 border border-gray-100 transform hover:scale-105 transition-all">
                                <img src={recuerdo2} className="w-full h-full object-cover" alt="Detalle" />
                            </div>

                            <p>
                                Mi mayor terror, el miedo que me paralizaba en las noches, era el de olvidar tu voz. Aquella voz que alguna vez fue mi faro, la que me hizo sentir vivo, llena de sabiduría y esperanza; una melodía que temía perder en la niebla del tiempo.
                            </p>

                            <p>
                                El destino, con su cruel ironía, me llevó a verte de nuevo. Para el mundo eran simples pasillos de universidad, corredores llenos de gente indiferente, pero para mí, eran un laberinto donde mi corazón se detuvo. La primera vez que te vi ese mes, sentí una fatalidad hermosa y aterradora: aquello que tanto amaba estaba ahí, tangible, y yo era prisionero de mi propio pánico. Incapaz de actuar, huí a la parte más alta, convirtiéndome en un espectador lejano de tu vida.
                            </p>

                            <div className="my-8 flex justify-center">
                                <Star size={32} className="text-yellow-400/60" />
                                <Star size={32} className="text-yellow-400/60 mx-4" />
                                <Star size={32} className="text-yellow-400/60" />
                            </div>

                            <p>
                                Desde las alturas, vi cómo la lluvia acariciaba tu paraguas. Aún a la distancia, tu dulzura era palpable, un contraste cálido contra el gris del cielo. Mientras caminaba cerca de ti, mi voz, estrangulada por el miedo, solo acertaba a susurrar un "lo siento, te quiero" tan bajo que solo el viento pudo escucharlo. Era mi liturgia diaria: hablar de ti, pensar en ti, vivir en tu sombra.
                            </p>

                            <div className="float-left mr-6 my-4 w-40 rotate-[-4deg] p-1 bg-white shadow transform hover:scale-105 transition-all">
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-teal-200/50"></div>
                                <img src={recuerdo4} className="w-full h-full object-cover" alt="Lluvia" />
                            </div>

                            <p>
                                El momento decisivo llegó y me encontró desarmado. Estuve justo detrás de ti, tan cerca que podía sentir tu presencia, pero mi corazón colapsó en pánico. Fui un cobarde ante la única persona que mi alma ha jurado amar. Esa impotencia me frustró hasta quebrarme; me refugié en mi cama, donde el arrepentimiento se convirtió en lágrimas, deseando con todas mis fuerzas un abrazo tuyo que nunca pedí.
                            </p>

                            <p>
                                Y así llegó mi cumpleaños. No hubo celebración en mi interior. Rodeado de familia y amigos, la soledad era mi única compañera real. Al llegar la hora del pastel, el ruido de la fiesta se apagó en mi mente. Solo anhelaba escuchar tu voz, esa voz de ángel que tiene el poder de sanar y decir que "todo estará bien". Sople la vela rodeado de gente, pero con el espíritu ausente, deseando lo imposible: que al abrir los ojos, tú estuvieras ahí. Sople la vela sin saber qué pasaría, dejando que el humo se llevara mi súplica silenciosa.
                            </p>
                        </div>

                        <div className="mt-16 flex justify-center gap-4 border-t border-dashed border-gray-300 pt-8">
                            <Heart className="text-rose-400 animate-pulse" size={32} fill="#fb7185" />
                        </div>

                    </article>
                </div>
            </div>
        </div>
    );
};

export default JanuaryEntry;
