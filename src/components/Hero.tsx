import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

interface HeroProps {
  id: string;
  scrollToNext: () => void;
}

const Hero = ({ id, scrollToNext }: HeroProps) => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#00bfff", "#ff00ff", "#00ff00"] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          },
          interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
        }}
        className="absolute inset-0"
      />
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