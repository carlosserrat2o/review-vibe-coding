import { motion } from 'framer-motion';
import { Code, User, Zap, Target, Gauge, Bug, GraduationCap, Wrench } from 'lucide-react';

const categories = [
  { 
    category: 'Creación de código', 
    traditional: 'Codificación manual línea a línea', 
    vibe: 'Generado por la IA a partir de prompts', 
    opinion: '',
    icon: <Code className="w-8 h-8" />
  },
  { 
    category: 'Rol del desarrollador', 
    traditional: 'Arquitecto, implementador, depurador', 
    vibe: 'Indicador (prompter), guía, evaluador, refinador', 
    opinion: 'Ser arquitecto es importante. Cuanto más definas lo que quieres a nivel tecnológico, mejores resultados obtendrás',
    icon: <User className="w-8 h-8" />
  },
  { 
    category: 'Nivel de código requerido', 
    traditional: 'Alta (conocimiento de lenguajes y sintaxis)', 
    vibe: 'Baja (entendimiento de la funcionalidad deseada)', 
    opinion: 'Media si quieres obtener resultados mantenibles',
    icon: <Target className="w-8 h-8" />
  },
  { 
    category: 'Entrada principal', 
    traditional: 'Código preciso', 
    vibe: 'Indicaciones y retroalimentación en lenguaje natural', 
    opinion: '',
    icon: <Zap className="w-8 h-8" />
  },
  { 
    category: 'Velocidad de desarrollo', 
    traditional: 'Generalmente más lento, metódico', 
    vibe: 'Potencialmente más rápido, especialmente para prototipos simples', 
    opinion: 'Potencialmente más rápido, si das indicaciones cortas y precisas',
    icon: <Gauge className="w-8 h-8" />
  },
  { 
    category: 'Manejo de errores', 
    traditional: 'Depuración manual basada en comprensión del código', 
    vibe: 'Refinamiento mediante retroalimentación conversacional', 
    opinion: 'Ambas, ya que no siempre tendrás la solución en la IA',
    icon: <Bug className="w-8 h-8" />
  },
  { 
    category: 'Curva de aprendizaje', 
    traditional: 'A menudo pronunciada', 
    vibe: 'Potencialmente menor barrera de entrada', 
    opinion: 'El diseño se vuelve la parte más importante',
    icon: <GraduationCap className="w-8 h-8" />
  },
  { 
    category: 'Mantenimiento de código', 
    traditional: 'Depende de la calidad del código, habilidades del desarrollador y buenas prácticas', 
    vibe: 'Puede depender en gran medida de la calidad de la salida de la IA y de la revisión del usuario', 
    opinion: 'Es el mayor punto débil para mí del Vibe Coding',
    icon: <Wrench className="w-8 h-8" />
  },
];

const Comparison = ({ id }: { id: string }) => {
  return (
    <section id={id} className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-6xl font-bold mb-20 text-center neon-glow"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vibe Coding vs Traditional Coding
        </motion.h2>
        
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Header */}
              <div className="flex items-center mb-8">
                <motion.div
                  className="bg-gradient-to-r from-neon-blue to-neon-purple p-3 rounded-full mr-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-3xl font-bold neon-glow">{item.category}</h3>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Traditional */}
                <motion.div
                  className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <h4 className="text-2xl font-semibold text-red-300 mb-4">Traditional</h4>
                  <p className="text-lg text-gray-300 leading-relaxed">{item.traditional}</p>
                </motion.div>

                {/* Vibe Coding */}
                <motion.div
                  className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <h4 className="text-2xl font-semibold text-green-300 mb-4">Vibe Coding</h4>
                  <p className="text-lg text-gray-300 leading-relaxed">{item.vibe}</p>
                </motion.div>

                {/* Opinion */}
                <motion.div
                  className={`${item.opinion ? 'bg-blue-900/20 border border-blue-500/30' : 'bg-gray-800/20 border border-gray-600/30'} p-6 rounded-xl`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  <h4 className="text-2xl font-semibold text-blue-300 mb-4">Mi Opinión</h4>
                  <p className={`text-lg leading-relaxed ${item.opinion ? 'text-gray-300 italic' : 'text-gray-500'}`}>
                    {item.opinion || 'Sin comentarios adicionales'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison; 