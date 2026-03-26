import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.gyoungchun.com/images/business_1.jpg" 
          alt="Peaceful Memorial Park View" 
          className="w-full h-full object-cover"
        />
        {/* Darkened overlay: Changed from bg-black/30 to bg-black/60 to increase darkness by 30% */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand-green/90"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full text-center">
        <div className="flex flex-col items-center justify-center gap-8">
          
          <div className="text-white animate-slide-up max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white rounded-full text-white text-sm font-medium uppercase tracking-widest mb-10 backdrop-blur-sm bg-white/5">
              <span>재단법인 경춘공원묘원 협력업체 전통 장묘 장례 플랫폼</span>
            </div>
            
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 drop-shadow-xl">
              추모와 힐링을 동시에,<br />
              <span className="italic">경춘공원 힐링 패키지</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/95 font-light leading-relaxed mb-12 drop-shadow-md max-w-2xl mx-auto">
              마음이 정리될 수 있는 시간,<br/>
              자연 속 가장 평온한 안식처를 제안합니다.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
               <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-brand-gold text-brand-green font-serif font-bold text-lg rounded-sm hover:bg-white transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
               >
                전문가 상담 예약하기
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium text-lg rounded-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                시설 둘러보기
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer" onClick={() => scrollToSection('intro')}>
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;