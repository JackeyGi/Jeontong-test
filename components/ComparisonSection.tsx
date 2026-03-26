import React, { useEffect, useState } from 'react';
import { AreaChart, TrendingDown } from 'lucide-react';
import { ChartData } from '../types';

const BarChart: React.FC<{ data: ChartData }> = ({ data }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate width on mount
    const timer = setTimeout(() => {
      setWidth((data.value / data.max) * 100);
    }, 500);
    return () => clearTimeout(timer);
  }, [data.value, data.max]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="font-semibold text-slate-700 text-sm md:text-base">{data.label}</span>
        <span className="font-bold text-slate-900 text-lg md:text-xl">
          {data.value.toLocaleString()} <span className="text-sm font-normal text-slate-500">{data.unit}</span>
        </span>
      </div>
      <div className="h-12 w-full bg-slate-100 rounded-xl overflow-hidden relative">
        <div 
          className={`h-full absolute left-0 top-0 rounded-xl transition-all duration-1000 ease-out flex items-center justify-end px-3 ${data.color}`}
          style={{ width: `${width}%` }}
        >
          {width > 20 && <span className="text-white/90 text-xs font-bold">TOP CHOICE</span>}
        </div>
      </div>
    </div>
  );
};

const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="container mx-auto px-4 md:px-8">
      <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/3 text-left">
            <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 text-brand-green">
              <TrendingDown size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              가격은 절반,<br/> 공간은 <span className="text-brand-green">4배</span>.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              가격이 아닌 구조의 차이입니다.<br/>
              전통(Jeontong)이 엄선한 경춘공원은 거품을 걷어내고, 진정한 추모의 가치를 담았습니다.
            </p>
            <div className="p-4 bg-brand-gold/10 rounded-xl border border-brand-gold/20">
              <p className="text-brand-gold font-semibold text-sm">
                💡 팩트 체크: 수도권 공원묘원 평균 대비 데이터입니다.
              </p>
            </div>
          </div>

          {/* Visual Charts */}
          <div className="lg:w-2/3 w-full bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <AreaChart size={20} className="text-slate-400" />
                Comparative Analysis
              </h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div> 타 공원
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-brand-green"></div> 경춘공원
                </div>
              </div>
            </div>

            {/* Area Comparison */}
            <div className="mb-10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">제례 공간 면적 (평)</h4>
              <BarChart 
                data={{ label: "일반 공원묘지", value: 0.6, max: 2.8, unit: "평", color: "bg-slate-300" }} 
              />
              <BarChart 
                data={{ label: "경춘공원", value: 2.5, max: 2.8, unit: "평", color: "bg-gradient-to-r from-brand-green to-emerald-500 shadow-lg shadow-green-500/20" }} 
              />
            </div>

            {/* Price Comparison */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">평균 분양가 (만원)</h4>
              <BarChart 
                data={{ label: "일반 공원묘지", value: 3000, max: 3200, unit: "만원~", color: "bg-slate-300" }} 
              />
              <BarChart 
                data={{ label: "경춘공원", value: 1500, max: 3200, unit: "만원~", color: "bg-gradient-to-r from-brand-green to-emerald-500 shadow-lg shadow-green-500/20" }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;