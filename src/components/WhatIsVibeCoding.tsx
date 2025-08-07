import { motion } from 'framer-motion';
import { MessageSquare, Brain, Code, User, RefreshCw } from 'lucide-react';

const contentSections = [
  { 
    content: 'Vibe Coding consiste en utilizar el lenguaje natural para programar vía IA generativa',
    icon: <MessageSquare className="w-16 h-16 text-neon-blue" />,
    subtitle: 'Definición'
  },
  { 
    content: '"Solo dices lo que quieres, ejecutas, y funciona la mayoría de las veces"',
    author: '- Andrej Karpathy, OpenAI', 
    isQuote: true,
    icon: <Brain className="w-16 h-16 text-neon-purple" />,
    subtitle: 'Filosofía'
  },
  { 
    content: 'Flujo de Desarrollo',
    isDiagram: true,
    icon: <Code className="w-16 h-16 text-neon-green" />,
    subtitle: 'Proceso'
  },
];

const diagramSteps = [
  { text: 'Petición', icon: <MessageSquare className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
  { text: 'Interpretación de GenAI', icon: <Brain className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
  { text: 'Generación de código', icon: <Code className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' },
  { text: 'Feedback del desarrollador', icon: <User className="w-8 h-8" />, color: 'from-orange-500 to-red-500' },
  { text: 'Revisión de código', icon: <RefreshCw className="w-8 h-8" />, color: 'from-indigo-500 to-purple-500' },
];

const WhatIsVibeCoding = ({ id }: { id: string }) => {
  return (
    <section id={id} className="min-h-screen py-20 relative overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/20 to-purple-900/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-6xl font-bold mb-20 text-center neon-glow"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Qué es el Vibe Coding?
        </motion.h2>
        
        <div className="max-w-6xl mx-auto space-y-32">
          {contentSections.map((section, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Subtitle */}
              <motion.div
                className="text-sm uppercase tracking-widest text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {section.subtitle}
              </motion.div>

              {/* Icon */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              >
                {section.icon}
              </motion.div>

              {/* Content */}
              {section.isQuote ? (
                <motion.div
                  className="glass p-12 max-w-4xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <blockquote className="text-4xl italic text-gray-200 leading-relaxed mb-4">
                    {section.content}
                  </blockquote>
                  <p className="text-xl text-neon-purple">{section.author}</p>
                </motion.div>
              ) : section.isDiagram ? (
                <div className="w-full">
                  <motion.h3 
                    className="text-3xl font-bold mb-12 text-neon-green"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {section.content}
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {diagramSteps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        className={`bg-gradient-to-br ${step.color} p-6 rounded-xl shadow-neon flex flex-col items-center text-center relative`}
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.6 + idx * 0.2, 
                          type: "spring",
                          stiffness: 200 
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 0 30px rgba(0, 191, 255, 0.8)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="bg-white/20 rounded-full p-3 mb-4">
                          {step.icon}
                        </div>
                        <span className="font-semibold text-lg">{step.text}</span>
                        {idx < diagramSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-3xl text-white/70">
                            →
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  className="glass p-12 max-w-5xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-4xl text-gray-200 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsVibeCoding; 