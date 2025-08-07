import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { TrendingUp, Users, Clock, Code } from 'lucide-react';

const stats = [
  { 
    value: 55, 
    suffix: '%', 
    description: 'menos tiempo con GitHub Copilot',
    source: '(2023)',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    value: 90, 
    suffix: '%', 
    description: 'uso de IA subió del 61% al 90%',
    source: '(Jellyfish)',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    value: 68, 
    suffix: '%', 
    description: 'desarrolladores ahorran +10h/semana con IA',
    source: '(Atlassian)',
    icon: <Clock className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    value: 16, 
    suffix: '%', 
    description: 'del tiempo codificando',
    subdescription: '84% tareas administrativas',
    source: '(Tech Radar)',
    icon: <Code className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500'
  },
];

const Statistics = ({ id }: { id: string }) => {
  return (
    <section id={id} className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-6xl font-bold mb-20 text-center neon-glow"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Datos Interesantes
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                className="glass p-8 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    className={`bg-gradient-to-r ${stat.color} p-4 rounded-full mb-6`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: idx * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200 
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: idx * 0.2 + 0.5 }}
                  >
                    <CountUp 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      duration={2.5} 
                      className={`text-7xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    />
                  </motion.div>
                  
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.7 }}
                    className="text-center"
                  >
                    <p className="text-xl text-gray-300 mb-2 leading-relaxed">
                      {stat.description}
                    </p>
                    {stat.subdescription && (
                      <p className="text-lg text-gray-400 mb-2">
                        {stat.subdescription}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {stat.source}
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border border-white/10 rounded-full" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/10 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics; 