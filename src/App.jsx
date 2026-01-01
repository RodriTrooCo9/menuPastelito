import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Cake, Coffee, PenTool, Star, Gift, Cookie, Candy, Camera } from 'lucide-react';
import recuerdo1 from './assets/recuerdo1.jpg';
import recuerdo2 from './assets/recuerdo2.jpg';
import recuerdo3 from './assets/recuerdo3.jpg';
import recuerdo4 from './assets/recuerdo4.jpg';
import recuerdo5 from './assets/recuerdo5.jpg';
import recuerdo6 from './assets/recuerdo6.jpg';
import recuerdo7 from './assets/recuerdo7.jpg';

import paseoLuces from './assets/paseo_luces.jpg';
import plazaNoche from './assets/plaza_noche.jpg';
import gatitoDuerme from './assets/gatito_duerme.jpg';
import angelAnime from './assets/angel_anime.jpg';
import espacioArte from './assets/espacio_arte.jpg';

import MonthEntry from './MonthEntry';
import GiftModal from './GiftModal';
import CakeModal from './CakeModal';
import { monthsData } from './data/monthsData';

const SweetJournalEntry = () => {
  const [scrolled, setScrolled] = useState(0);

  /* New State for Modal */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [showGift, setShowGift] = useState(false);
  const [showCake, setShowCake] = useState(false);



  /* Months Data for Selector (Names) */
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsModalOpen(false); // Close the selector modal
  };

  if (selectedMonth) {
    const data = monthsData[selectedMonth] || {
      title: `${selectedMonth.toUpperCase()}`,
      paragraphs: ["Próximamente...", "Este mes aún no ha sido escrito."],
      images: []
    };
    return <MonthEntry data={data} onClose={() => setSelectedMonth(null)} />;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff0f5] relative overflow-x-hidden font-serif selection:bg-rose-200 selection:text-rose-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="relative w-full max-w-2xl bg-white/40 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-[0_0_50px_rgba(255,182,193,0.6)] border-4 border-white/50 animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/60 hover:bg-white text-rose-400 hover:text-rose-600 transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-['Caveat'] text-center text-rose-600 mb-8 drop-shadow-sm">
              Selecciona un Mes Dulce
            </h3>

            {/* Grid of Months */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {months.map((month, index) => (
                <button
                  key={index}
                  onClick={() => handleMonthSelect(month)}
                  className="group relative p-4 rounded-xl bg-white/50 hover:bg-white border-2 border-rose-100 hover:border-rose-300 transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-rose-200/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 font-serif text-rose-800 font-medium tracking-wide group-hover:tracking-wider transition-all">
                    {month}
                  </span>
                  <div className="absolute -bottom-2 -right-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Heart size={16} className="text-rose-400 rotate-12" fill="currentColor" />
                  </div>
                </button>
              ))}
            </div>

            {/* Decorative Sweets around Modal */}
            <div className="absolute -top-6 -left-6 text-rose-300 rotate-[-20deg] animate-pulse">
              <Candy size={48} />
            </div>
            <div className="absolute -bottom-8 -right-4 text-pink-400 rotate-[15deg]">
              <Cookie size={52} />
            </div>
            <div className="absolute top-1/2 -right-8 text-rose-300 animate-[bounce_3s_infinite]">
              <Heart size={32} fill="#fda4af" />
            </div>
            <div className="absolute bottom-10 -left-8 text-yellow-500/60 rotate-[45deg]">
              <Star size={36} fill="#fde047" />
            </div>

          </div>
        </div>
      )}

      <div className="fixed inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#eecfd5 3px, transparent 3px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>


      {/* --- Floating Personal Photos (Replaced Generic) --- */}
      <div className="fixed top-20 -left-10 md:left-10 w-32 md:w-48 opacity-80 pointer-events-none animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]">
        <img src={gatitoDuerme} className="rounded-full shadow-xl border-4 border-white rotate-12 h-32 md:h-48 object-cover" alt="Gatito" />
      </div>

      <div className="fixed top-40 -right-10 md:right-5 w-24 md:w-40 opacity-70 pointer-events-none hover:opacity-100 transition-opacity">
        <img src={angelAnime} className="rounded-xl shadow-lg border-4 border-white -rotate-12" alt="Angel" />
      </div>


      <div className="fixed bottom-40 left-5 w-28 md:w-36 opacity-60 pointer-events-none">
        <img src={espacioArte} className="rounded-full shadow-lg border-4 border-white rotate-45 h-28 md:h-36 object-cover" alt="Arte" />
      </div>


      <div className="fixed bottom-10 right-10 w-32 md:w-52 opacity-80 pointer-events-none animate-bounce" style={{ animationDuration: '8s' }}>
        <img src={plazaNoche} className="rounded-2xl shadow-xl border-4 border-white -rotate-6" alt="Noche" />
      </div>


      <div className="fixed top-1/2 left-10 text-rose-300 animate-[spin_10s_linear_infinite] pointer-events-none hidden md:block">
        <Candy size={48} />
      </div>
      <div className="fixed top-1/3 right-20 text-rose-300 pointer-events-none hidden md:block animate-[pulse_3s_ease-in-out_infinite]">
        <Cookie size={32} />
      </div>


      <main className="relative max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 z-10">

        <header className="mb-12 text-center relative z-10">
          <div className="inline-flex flex-col items-center bg-white/90 backdrop-blur-sm p-8 rounded-[3rem] shadow-2xl border-8 border-rose-100 transform hover:scale-105 transition-transform duration-500">
            <div className="bg-rose-100 p-4 rounded-full mb-4 animate-bounce">
              <Cake className="text-rose-500" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-rose-900 tracking-tight mb-2 font-['Playfair_Display'] drop-shadow-sm">
              LA BITÁCORA
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-rose-600 italic font-['Playfair_Display']">
              de lo Eterno
            </h2>
            <div className="flex items-center gap-3 mt-4 text-rose-400 text-sm font-sans tracking-widest uppercase bg-rose-50 px-4 py-1 rounded-full border border-rose-100">
              <Sparkles size={14} />
              <span>Un año en versos</span>
              <Sparkles size={14} />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">


          <div className="hidden lg:flex lg:col-span-3 flex-col gap-12 sticky top-24">


            <div className="relative group hover:z-20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-pink-200/60 rotate-2 z-10 backdrop-blur-[1px]"></div>
              <div className="bg-white p-3 rounded-lg shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <img
                  src={recuerdo2}
                  alt="Cupcake"
                  className="w-full h-40 object-cover rounded-md"
                />
                <p className="text-center font-['Caveat'] text-xl text-rose-400 mt-2">Dulces suspiros</p>
              </div>
            </div>


            <div className="bg-yellow-100 p-6 rounded-tl-3xl rounded-br-3xl shadow-md transform rotate-6 border-dashed border-2 border-yellow-300 hover:rotate-3 transition-transform">
              <p className="font-['Playfair_Display'] italic text-rose-800 text-lg leading-relaxed text-center">
                "Eres una bella y dulce Pastelito"
              </p>
              <Heart size={16} className="mx-auto mt-2 text-rose-400 fill-current" />
            </div>


            <div className="relative group mt-4">
              <div className="bg-white p-2 rounded-full shadow-xl w-32 h-32 mx-auto overflow-hidden border-4 border-rose-200 hover:scale-110 transition-transform">
                <img src={recuerdo4} className="w-full h-full object-cover" alt="Pastel fresas" />
              </div>
            </div>

          </div>


          <article className="lg:col-span-6 relative">

            <div className="bg-white/95 backdrop-blur shadow-2xl rounded-3xl overflow-hidden relative border-2 border-rose-100">


              <div className="h-6 w-full bg-[repeating-linear-gradient(45deg,#fecdd3,#fecdd3_10px,#ffe4e6_10px,#ffe4e6_20px)] flex items-center justify-center border-b border-rose-200">
              </div>

              <div className="p-8 md:p-12 prose prose-rose prose-lg max-w-none text-stone-600 font-['Playfair_Display']">

                <div className="float-right w-32 h-32 ml-4 mb-4 transform rotate-3 p-2 bg-white shadow-lg rounded-lg border border-gray-100">
                  <img src={recuerdo3} className="w-full h-full object-cover rounded" alt="Cumpleaños" />
                </div>

                <p className="lead first-letter:text-rose-500 first-letter:font-bold first-letter:text-5xl first-letter:float-left first-letter:mr-2">
                  Recordar nuestro tiempo es entender que la vida no se cuenta en fechas, sino en suspiros. Lo que hemos vivido no fueron simples días, fueron regalos del destino; tú fuiste esa dulce chispa que convirtió mi realidad en un sueño lleno de colores, borrando para siempre la soledad que habitaba en mí
                </p>


                <div className="my-10 bg-white p-4 pb-12 shadow-lg transform -rotate-1 w-full mx-auto max-w-md border border-gray-100 relative transition-transform hover:scale-[1.02] hover:rotate-0">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-pink-200/50 rotate-1 backdrop-blur-sm"></div>
                  <img
                    src={recuerdo1}
                    alt="Estética romántica y dulce"
                    className="w-full h-64 object-cover filter contrast-110"
                  />
                  <div className="absolute bottom-4 left-0 w-full text-center font-['Caveat'] text-2xl text-gray-500">
                    Nuestra eternidad
                  </div>
                </div>

                <p>
                  Quiero dejar plasmado, con la tinta indeleble del sentimiento, lo inmensamente feliz que he sido simplemente por el hecho de que existes en mi mismo tiempo y espacio. He disfrutado de la idea de ti, de tu presencia física, de tu eco en mi mente, e incluso de ese silencio que a veces compartimos.
                </p>

                <div className="bg-rose-50 p-6 rounded-2xl border-2 border-dashed border-rose-200 my-8 flex flex-col items-center text-center gap-2 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-rose-100 group-hover:scale-110 transition-transform"><Heart size={64} fill="currentColor" /></div>
                  <Heart className="text-rose-400 flex-shrink-0" size={24} fill="currentColor" />
                  <p className="m-0 text-rose-800 text-xl italic font-medium z-10 font-['Caveat']">
                    "Cada instante a tu lado, o cada instante pensando en ti, ha sido una lección de lo que significa estar verdaderamente vivo."
                  </p>
                </div>

                <p>
                  Eres, sin temor a la exageración, la persona más especial que ha cruzado el umbral de mi historia. Tienes esa capacidad rara y divina de alterar la gravedad de mi mundo, de hacer que todo lo demás pierda importancia frente a tu luz. eres un pastelito te has convertido en la tinta con la que quiero escribir el resto del libro.
                </p>


                <div className="flex flex-wrap justify-center gap-4 my-8 relative">

                  <div className="w-32 h-32 bg-white p-2 shadow-md transform rotate-6 rounded-lg hover:rotate-12 transition-transform">
                    <img src={recuerdo6} className="w-full h-full object-cover rounded" alt="Sweet 1" />
                  </div>

                  <div className="w-32 h-32 bg-white p-2 shadow-md transform -rotate-3 rounded-lg z-10 hover:scale-110 transition-transform">
                    <img src={recuerdo5} className="w-full h-full object-cover rounded" alt="Sweet 2" />
                  </div>

                  <div className="w-32 h-32 bg-white p-2 shadow-md transform rotate-12 rounded-lg hover:rotate-6 transition-transform">
                    <img src={recuerdo7} className="w-full h-full object-cover rounded" alt="Sweet 3" />
                  </div>
                </div>

                <p>
                  Y es por eso que escribo esto. Porque la realidad contigo es tan densa, tan rica y tan profunda, que el lenguaje común se queda corto. Me he dado cuenta de que un solo día contigo, un solo gesto tuyo, me deja el alma tan llena que tendría tema de conversación para dos meses enteros.
                </p>

                <p>
                  Por ello, he decidido que mi memoria no será fugaz. Quiero transformar cada vivencia en arte. Si cada día nos regala una eternidad, entonces prometo dedicar meses a desglosar esos días en versos. Prometo que no habrá detalle, por ínfimo que parezca —desde la forma en que miras la lluvia hasta la manera en que caminas por los pasillos— que no sea digno de ser "poemado".
                </p>

              </div>


              <div className="bg-gradient-to-b from-white to-rose-50 p-8 border-t border-rose-100 text-center relative">
                <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-sm border border-rose-100">
                  <Gift className="text-rose-400" size={24} />
                </div>
                <p className="font-['Caveat'] text-3xl text-rose-800 mb-2 mt-4">Gracias por ser la Pastelito y dulce Nicol uwu</p>
                <div className="flex justify-center gap-3 mt-4 text-rose-300">
                  <Star size={16} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                <div className="flex justify-center gap-6 mt-8 pb-4">
                  <button
                    onClick={() => setShowGift(true)}
                    className="p-3 bg-white rounded-full shadow-md text-rose-400 hover:text-rose-500 hover:scale-110 transition-all border border-rose-100 group" title="Regalo">
                    <Gift size={24} className="group-hover:rotate-12 transition-transform" />
                  </button>
                  <button
                    onClick={() => setShowCake(true)}
                    className="p-3 bg-white rounded-full shadow-md text-rose-400 hover:text-rose-500 hover:scale-110 transition-all border border-rose-100 group" title="Pastel">
                    <Cake size={24} className="group-hover:-rotate-12 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-3 bg-white rounded-full shadow-md text-rose-400 hover:text-rose-500 hover:scale-110 transition-all border border-rose-100 group"
                    title="Foto"
                  >
                    <Camera size={24} className="group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </article>


          <div className="hidden lg:flex lg:col-span-3 flex-col gap-10 sticky top-32 pl-4">


            <div className="relative group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50 transform translate-x-2 translate-y-2"></div>
              <img src={recuerdo6} className="w-48 h-48 object-cover rounded-full border-8 border-white shadow-xl relative z-10 mx-auto" alt="Pastel de colores" />
            </div>


            <div className="bg-white p-3 pb-8 shadow-xl transform rotate-6 border border-gray-100 w-48 ml-auto relative hover:rotate-3 transition-transform">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md animate-bounce">
                Love
              </div>
              <img src={recuerdo5} className="w-full h-32 object-cover bg-gray-100 mb-3 grayscale-[20%]" alt="Cookies" />
              <div className="text-center font-['Caveat'] text-xl text-gray-500">Dulces recuerdos</div>
            </div>

            <div className="bg-white/80 p-4 rounded-xl border-2 border-rose-200 text-rose-800 shadow-inner backdrop-blur-sm hover:bg-white transition-colors">
              <div className="flex items-center justify-center gap-2 text-sm font-bold font-sans">
                <Coffee size={18} />
                <span>Cafe & Pastelitos</span>
              </div>
            </div>
          </div>

        </div>


        {/* --- NEW PHOTO STRIP SECTION --- */}
        <div className="my-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-1 bg-rose-200 -z-10"></div>
          <h3 className="text-center font-['Dancing_Script'] text-4xl text-rose-800 mb-8 bg-[#fff0f5] inline-block px-4 mx-auto block leading-tight">
            Instantes Infinitos
          </h3>

          <div className="flex gap-4 overflow-x-auto pb-8 pt-4 px-4 snap-x custom-scrollbar">
            <div className="flex-shrink-0 w-64 h-64 bg-white p-3 rounded-xl shadow-lg transform rotate-2 snap-center hover:scale-105 transition-transform">
              <img src={paseoLuces} className="w-full h-full object-cover rounded-lg" />
              <span className="absolute bottom-4 right-4 bg-white/80 px-2 rounded font-['Caveat'] text-lg">Luces ✨</span>
            </div>
            <div className="flex-shrink-0 w-64 h-64 bg-white p-3 rounded-xl shadow-lg transform -rotate-2 snap-center hover:scale-105 transition-transform">
              <img src={plazaNoche} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-64 h-64 bg-white p-3 rounded-xl shadow-lg transform rotate-1 snap-center hover:scale-105 transition-transform">
              <img src={gatitoDuerme} className="w-full h-full object-cover rounded-lg" />
              <span className="absolute top-4 left-4 text-3xl">🐱</span>
            </div>
            <div className="flex-shrink-0 w-64 h-64 bg-white p-3 rounded-xl shadow-lg transform -rotate-3 snap-center hover:scale-105 transition-transform">
              <img src={angelAnime} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-64 h-64 bg-white p-3 rounded-xl shadow-lg transform rotate-2 snap-center hover:scale-105 transition-transform">
              <img src={espacioArte} className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* Reuse some old ones to fill space */}
            <div className="flex-shrink-0 w-64 h-64 bg-white p-3 rounded-xl shadow-lg transform -rotate-1 snap-center hover:scale-105 transition-transform">
              <img src={recuerdo3} className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

      </main >

      {/* --- MONTH OVERLAYS --- */}
      {/* This ensures they render ON TOP of the app without removing the app itself */}

      {
        selectedMonth === "Febrero" && (
          <FebruaryEntry
            data={monthsData["Febrero"]}
            onClose={() => setSelectedMonth(null)}
          />
        )
      }

      {
        selectedMonth && selectedMonth !== "Febrero" && (
          <MonthEntry
            data={monthsData[selectedMonth] || { title: selectedMonth, paragraphs: [], images: [] }}
            onClose={() => setSelectedMonth(null)}
          />
        )
      }

      {/* Gift Modal Overlay */}
      {
        showGift && (
          <GiftModal onClose={() => setShowGift(false)} />
        )
      }


      {
        showCake && (
          <CakeModal onClose={() => setShowCake(false)} />
        )
      }

    </div >
  );
};
export default SweetJournalEntry;