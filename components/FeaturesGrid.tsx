import React from 'react';
import { Maximize2, ShieldCheck, Mountain, MapPin } from 'lucide-react';
import { GridFeatureItem } from '../types';

const features: GridFeatureItem[] = [
  {
    title: "넓은 제례 공간",
    description: "성묘객들이 넉넉하게 머무를 수 있는 2.5평 내외의 광폭 공간을 제공합니다. 쫓기듯 떠나는 추모가 아닙니다.",
    icon: <Maximize2 size={32} className="text-brand-gold" />,
    colSpan: "md:col-span-2 md:row-span-2"
  },
  {
    title: "재단법인 운영",
    description: "개인이 아닌 재단법인이 운영하여, 영속성과 관리 체계가 법적으로 보장됩니다.",
    icon: <ShieldCheck size={28} className="text-brand-green" />,
    colSpan: "md:col-span-1 md:row-span-1"
  },
  {
    title: "탁 트인 배산임수",
    description: "북한강이 내려다보이는 수려한 경관. 답답한 도심형 묘역과 차원이 다릅니다.",
    icon: <Mountain size={28} className="text-sky-500" />,
    colSpan: "md:col-span-1 md:row-span-1"
  },
  {
    title: "최적의 접근성",
    description: "서울에서 40분, 가평역 인근. 남이섬과 자라섬이 10분 거리에 있어 나들이 겸 추모가 가능합니다.",
    icon: <MapPin size={28} className="text-rose-500" />,
    colSpan: "md:col-span-2 md:row-span-1"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">경춘공원이 선택받는 이유</h2>
        <p className="text-slate-500">전통(Jeontong)이 꼼꼼하게 따져보고 추천합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className={`${feature.colSpan} group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between`}
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-brand-green/10 transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;