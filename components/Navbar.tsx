import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-brand-green/95 backdrop-blur-md shadow-lg text-white' 
          : 'py-6 bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Gyeongchun Logo (Moved to Left) */}
          <img 
            src="https://www.gyoungchun.com/images/logo.png" 
            alt="경춘공원묘원" 
            className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-95" 
          />
          
          <div className="h-4 w-px bg-white/40"></div>
          
          {/* Jeontong Logo (Moved to Right) */}
          <img 
            src="https://jeontong.kr/img/logo/logo.png" 
            alt="Jeontong" 
            className="h-5 md:h-7 w-auto object-contain brightness-0 invert opacity-90" 
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#intro" onClick={(e) => scrollToSection(e, 'intro')} className="text-sm font-medium tracking-wide hover:text-brand-gold transition-colors">철학</a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium tracking-wide hover:text-brand-gold transition-colors">시설안내</a>
          <a href="#healing" onClick={(e) => scrollToSection(e, 'healing')} className="text-sm font-medium tracking-wide hover:text-brand-gold transition-colors">힐링패키지</a>
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-6 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-brand-green transition-all duration-300 text-sm font-semibold tracking-wide cursor-pointer"
          >
            상담 예약
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-green p-6 flex flex-col gap-6 shadow-xl md:hidden border-t border-white/10">
          <a href="#intro" className="text-white/80 font-medium" onClick={(e) => scrollToSection(e, 'intro')}>철학</a>
          <a href="#features" className="text-white/80 font-medium" onClick={(e) => scrollToSection(e, 'features')}>시설안내</a>
          <a href="#healing" className="text-white/80 font-medium" onClick={(e) => scrollToSection(e, 'healing')}>힐링패키지</a>
          <button 
            className="w-full text-center py-3 bg-white text-brand-green font-semibold rounded-sm" 
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            상담 예약
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;