import { motion } from 'framer-motion';

interface Section {
  id: string;
  title: string;
}

interface HeaderProps {
  sections: Section[];
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const Header = ({ sections, currentSection, scrollToSection }: HeaderProps) => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 glass z-50 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-center space-x-8">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`text-lg font-semibold ${currentSection === index ? 'neon-glow' : 'text-gray-300'} hover:neon-glow transition duration-300`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header; 