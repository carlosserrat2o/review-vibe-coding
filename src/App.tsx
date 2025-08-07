import { useState, useEffect, useRef, forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import WhatIsVibeCoding from './components/WhatIsVibeCoding.tsx';
import Comparison from './components/Comparison.tsx';
import Solutions from './components/Solutions.tsx';
import Statistics from './components/Statistics.tsx';
import Footer from './components/Footer.tsx';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'hero', title: 'Inicio' },
  { id: 'what-is', title: '¿Qué es?' },
  { id: 'comparison', title: 'Comparación' },
  { id: 'solutions', title: 'Soluciones' },
  { id: 'statistics', title: 'Datos' },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  const progress = (currentSection / (sections.length - 1)) * 100;

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen animated-gradient">
      <Header sections={sections} currentSection={currentSection} scrollToSection={scrollToSection} />
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-500" style={{ width: `${progress}%`, transition: 'width 0.3s' }} />
      {sections.map((section, index) => (
        <SectionObserver key={section.id} index={index} setCurrentSection={setCurrentSection} ref={setSectionRef(index)}>
          {index === 0 && <Hero id={section.id} scrollToNext={() => scrollToSection(1)} />}
          {index === 1 && <WhatIsVibeCoding id={section.id} />}
          {index === 2 && <Comparison id={section.id} />}
          {index === 3 && <Solutions id={section.id} />}
          {index === 4 && <Statistics id={section.id} />}
        </SectionObserver>
      ))}
      <Footer />
    </div>
  );
}

interface SectionObserverProps {
  children: React.ReactNode;
  index: number;
  setCurrentSection: (index: number) => void;
}

const SectionObserver = forwardRef<HTMLElement, SectionObserverProps>(({ children, index, setCurrentSection }, ref) => {
  const [refInView, inView] = useInView({ threshold: 0.5 });
  
  useEffect(() => {
    if (inView) setCurrentSection(index);
  }, [inView, index, setCurrentSection]);
  
  return (
    <section 
      ref={(el) => {
        refInView(el);
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
      }}
    >
      {children}
    </section>
  );
});

SectionObserver.displayName = 'SectionObserver';

export default App; 