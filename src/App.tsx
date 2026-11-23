import React, { useState, useEffect } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StickySocialSidebar } from './components/StickySocialSidebar';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contributions } from './components/Contributions';
import { Achievements } from './components/Achievements';
import { Documentation } from './components/Documentation';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWideDesktop, setIsWideDesktop] = useState(false);
  const { isPastThreshold, isMobile } = useScrollPosition(420);

  useEffect(() => {
    const handleResize = () => {
      // With reduced left margin, the right margin comfortably fits Education at 1600px+
      setIsWideDesktop(window.innerWidth >= 1600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#020D08] text-neutral-900 dark:text-[#B8DCC8] font-mono transition-colors duration-200 selection:bg-[#00E676]/30 selection:text-[#00FF88]">
      {/* Sticky Floating Social Sidebar (Appears on desktop when scrolled past hero, positioned strictly in left margin) */}
      <StickySocialSidebar isVisible={isPastThreshold && !isMobile} />

      {/* Header with Navigation and Theme Toggle */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Container - Asymmetric desktop outer margins */}
      <main className="portfolio-desktop-container w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Hero Section with CodePortrait and Role Indicators */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          isPastThreshold={isPastThreshold}
        />

        {/* Technical Skills Section with Right Marginal Education on Wide Desktop */}
        <div className="relative">
          <Skills />

          {/* Education Timeline in Right Margin (Desktop: when right margin has comfortable space) */}
          {isWideDesktop && (
            <aside
              aria-label="Education timeline"
              className="absolute left-[calc(100%+2rem)] top-6 z-20"
            >
              <Education isMarginal={true} />
            </aside>
          )}
        </div>

        {/* Education Timeline directly below Technical Skills (Narrow Desktop / Tablet / Mobile) */}
        {!isWideDesktop && <Education isMarginal={false} />}

        {/* Experience Timeline directly below Education (Narrow Desktop / Tablet / Mobile) */}
        {!isWideDesktop && <Experience isMarginal={false} />}

        {/* Projects Section with Right Marginal Experience on Wide Desktop */}
        <div className="relative">
          <Projects />

          {/* Experience Timeline in Right Margin (Desktop: when right margin has comfortable space) */}
          {isWideDesktop && (
            <aside
              aria-label="Experience timeline"
              className="absolute left-[calc(100%+2rem)] top-6 z-20"
            >
              <Experience isMarginal={true} />
            </aside>
          )}
        </div>

        {/* Project Contributions */}
        <Contributions />

        {/* Achievements */}
        <Achievements />

        {/* Learning Labs & Documentations */}
        <Documentation />

        {/* FAQs */}
        <Faq />

        {/* Footer */}
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
