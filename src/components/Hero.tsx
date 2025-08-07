import { motion } from 'framer-motion';

interface HeroProps {
  id: string;
  scrollToNext: () => void;
}

const Hero = ({ id, scrollToNext }: HeroProps) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-black"></div>
      
      {/* Elementos decorativos estáticos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-blue rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-purple rounded-full opacity-80 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-neon-green rounded-full opacity-50 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-neon-blue rounded-full opacity-70 animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-neon-purple rounded-full opacity-60 animate-pulse delay-4000"></div>
      </div>

      <motion.div 
        className="text-center z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl font-bold mb-4 neon-glow">Vibe Coding: El Futuro del Desarrollo</h1>
        <p className="text-3xl mb-8 text-gray-300">Revoluciona la forma de programar con IA generativa</p>
        <button 
          onClick={scrollToNext}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-neon hover:shadow-neon"
        >
          Comenzar Presentación
        </button>
      </motion.div>
    </section>
  );
};

export default Hero; 