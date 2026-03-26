import React from 'react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "넓은 제례 공간, 머물 수 있는 추모",
    description: "성묘객들이 넉넉하게 머무를 수 있는 2.5평 내외의 광폭 공간을 제공합니다. 쫓기듯 떠나는 추모가 아닌, 가족이 함께 머무르며 위로를 나누는 시간이 됩니다.",
    image: "https://m.gyoungchun.com/_upload/home/product-bg-1-5fd16a08b5cf1.jpg",
    alt: "넓은 묘역 공간",
    stats: [
      { label: "일반 공원", value: "0.6평", desc: "협소한 공간" },
      { label: "경춘공원", value: "2.5평", desc: "4배 넓은 공간" }
    ]
  },
  {
    title: "거품을 걷어낸 합리적인 기준",
    description: "가격의 차이가 아닌 구조의 차이입니다. 경춘공원은 불필요한 비용 거품을 제거하고, 실질적인 가치에 집중하여 합리적인 분양가를 제안합니다.",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTBfMjA1/MDAxNTQ3MDgxODQzOTU5.qjPJWlbeCVJLYO8x4vIJokGAB8Xp9PdfGyyJYyOzEkUg.CoyLGd62G61FJX6e0CTr0p1RPx4zAxlqHXkGlJzGDnAg.JPEG.ecopiagp/1506424235134959682311862707_0.jpg?type=w800",
    alt: "합리적인 가격 그래프",
    stats: [
      { label: "일반 시세", value: "3,000만~", desc: "수도권 평균" },
      { label: "경춘공원", value: "1,500만~", desc: "합리적 시작가" }
    ]
  },
  {
    title: "믿을 수 있는 재단법인 운영",
    description: "개인이 아닌 공적 성격의 재단법인이 운영하여 영속성과 관리 체계가 법적으로 안전하게 보장됩니다. 대를 이어 관리되는 평생의 안식처입니다.",
    image: "https://i.postimg.cc/zBnRJhP0/Kakao-Talk-20251202-102855952.jpg",
    alt: "재단법인 사무실",
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white">
      {features.map((feature, idx) => (
        <div key={idx} className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <img 
              src={feature.image} 
              alt={feature.alt} 
              className="absolute inset-0 w-full h-full object-cover"
            />
             {/* Overlay for price section specifically to make text readable if needed, or style choice */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 px-8 py-16 md:p-24 flex flex-col justify-center bg-white">
            <div className="max-w-md mx-auto md:mx-0">
              <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 block">POINT 0{idx + 1}</span>
              <h3 className="font-serif text-3xl text-brand-green mb-6 leading-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 font-light">
                {feature.description}
              </p>

              {feature.stats && (
                <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
                  {feature.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                      <div className={`text-2xl font-bold ${sIdx === 1 ? 'text-brand-green' : 'text-gray-300'}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;