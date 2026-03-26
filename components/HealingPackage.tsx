import React from 'react';
import { BedDouble, Ticket, Flower, Heart } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    title: "리조트 2박 숙박권",
    subtitle: "엘리시안 강촌 / 켄싱턴 리조트",
    icon: <BedDouble className="w-6 h-6 text-white" />
  },
  {
    title: "관광지 입장권",
    subtitle: "남이섬, 자라섬, 아침고요수목원",
    icon: <Ticket className="w-6 h-6 text-white" />
  },
  {
    title: "고급 근조 바구니",
    subtitle: "품격 있는 헌화 서비스",
    icon: <Flower className="w-6 h-6 text-white" />
  }
];

const HealingPackage: React.FC = () => {
  return (
    <section id="package" className="container mx-auto px-4 md:px-8 py-10">
      <div className="relative bg-gradient-to-br from-brand-green/5 to-brand-gold/5 rounded-[40px] p-8 md:p-20 overflow-hidden text-center border border-white/60">
        
        {/* Background Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-brand-green/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-gold/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm mb-8 text-brand-green font-semibold">
            <Heart size={16} className="fill-brand-green" />
            <span>Healing & Memorial</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            추모와 휴식이 연결되는<br />
            특별한 혜택
          </h2>
          <p className="text-slate-600 text-lg mb-16">
            "전통(Jeontong)이 기획한 힐링 연계 동선으로,<br/>
            가족들이 슬픔을 넘어 서로를 위로하는 시간을 선물합니다."
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex-1 bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-brand-green to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">{benefit.title}</h3>
                <p className="text-sm text-slate-500">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealingPackage;