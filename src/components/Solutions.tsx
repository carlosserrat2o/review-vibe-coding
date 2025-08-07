import { motion } from 'framer-motion';

const solutions = [
  {
    name: 'Cursor',
    owner: 'Anysphere Inc.',
    cost: 'Hobby (gratis): 50 peticiones lentas\nPro (20USD/mes): 500 peticiones rápidas y más lentas',
    models: 'claude-4-sonnet, claude-3.7-sonnet, gpt 4.1, grok4, o3, o4-mini, gemini-2.5',
  },
  {
    name: 'GitHub Copilot',
    owner: 'GitHub + OpenAI',
    cost: 'Pro (10USD/mes): 300 peticiones premium al mes\nPro (39USD/mes): 1500 peticiones premium',
    models: 'Standard: GPT-4.1\nPremium: Claude 3.7 Sonnet, Gemini 2.5 Pro, o4-mini',
  },
  {
    name: 'Claude Code',
    owner: 'Anthropic',
    cost: 'Pro (~22EUR/mes): 300 peticiones premium al mes\nPro (~1100EUR/mes): 1500 peticiones premium',
    models: 'Acceso a todos los modelos de Claude',
  },
];

interface SolutionsProps {
  id: string;
}

const Solutions = ({ id }: SolutionsProps) => {
  return (
    <section id={id} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center neon-glow">Soluciones Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={idx}
              className="glass p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-6 neon-glow">{sol.name}</h3>
              <p className="mb-4 text-lg"><strong className="text-neon-blue">Propiedad:</strong> {sol.owner}</p>
              <p className="mb-4 text-lg"><strong className="text-neon-purple">Coste:</strong></p>
              {sol.cost.split('\n').map((line, i) => <p key={i} className="ml-4 text-gray-300 text-lg mb-2">{line}</p>)}
              <p className="mb-2 text-lg"><strong className="text-neon-green">Modelos:</strong> {sol.models}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 