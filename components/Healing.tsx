import React from 'react';
import { BedDouble, Ticket, Flower } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    title: "Premium Stay",
    subtitle: "리조트 2박 숙박권 제공 (엘리시안/켄싱턴)",
    icon: <BedDouble className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "Nature Tour",
    subtitle: "남이섬, 자라섬 입장권 및 수목원 연계",
    icon: <Ticket className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "Memorial Flower",
    subtitle: "품격 있는 고급 근조 꽃바구니 헌화",
    icon: <Flower className="w-8 h-8 text-brand-gold" />
  }
];

const Healing: React.FC = () => {
  return (
    <section id="healing" className="bg-brand-green py-24 px-6 md:px-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">추모 이후의 시간을 설계합니다</h2>
          <p className="text-white/70 font-light max-w-2xl mx-auto">
            슬픔에 잠겨있는 시간이 아닌, 가족이 함께 서로를 다독이는 시간이 되도록<br className="hidden md:block"/>
            전통 장묘 장례 플랫폼에서 세심하게 준비한 힐링 패키지입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="group bg-white/5 border border-white/10 hover:border-brand-gold/50 p-10 transition-all duration-300">
              <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3 text-white">{item.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-white/30 text-xs mt-16 tracking-wider">
          ※ 위 혜택은 전통 장묘 장례 플랫폼을 통해 계약하신 고객님께 제공되는 전용 패키지입니다.
        </p>
      </div>
    </section>
  );
};

export default Healing;