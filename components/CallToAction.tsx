import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-beige px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Text Info Side */}
          <div className="lg:w-1/2 bg-brand-green p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
             {/* Decorative abstract elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
                망설임은<br/> 
                좋은 자리를<br/>
                놓칠 뿐입니다.
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">힐링 패키지 대상 확인</h4>
                    <p className="text-white/60 font-light text-sm">전통 장묘 장례 플랫폼 고객 전용 혜택 적용 여부를 즉시 확인해 드립니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">로열단지 잔여석 조회</h4>
                    <p className="text-white/60 font-light text-sm">가장 선호도가 높은 명당 자리 정보를 안내받으실 수 있습니다.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                 <p className="text-sm text-brand-gold font-bold tracking-widest uppercase mb-2">무료 상담 번호</p>
                 <div className="flex items-center gap-3">
                   <Phone className="w-6 h-6 text-white" />
                   <span className="text-3xl font-serif">1599-3485</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 p-12 lg:p-16 bg-white flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-brand-green mb-2">전문가 무료 상담 신청</h3>
              <p className="text-gray-500 text-sm">하단 정보를 입력해주시면 담당자가 빠르게 연락드리겠습니다.</p>
            </div>

            <form 
              action="https://formspree.io/f/mwvvvknv" 
              method="POST" 
              className="space-y-6"
            >
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">성함</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required
                    className="w-full bg-brand-beige/30 border-b border-gray-200 px-4 py-4 focus:outline-none focus:border-brand-green focus:bg-brand-beige/50 transition-colors text-brand-charcoal placeholder-gray-300" 
                    placeholder="성함을 입력해주세요" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">연락처</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-brand-beige/30 border-b border-gray-200 px-4 py-4 focus:outline-none focus:border-brand-green focus:bg-brand-beige/50 transition-colors text-brand-charcoal placeholder-gray-300" 
                    placeholder="010-0000-0000" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">문의 내용 (선택)</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={3} 
                    className="w-full bg-brand-beige/30 border-b border-gray-200 px-4 py-4 focus:outline-none focus:border-brand-green focus:bg-brand-beige/50 transition-colors resize-none text-brand-charcoal placeholder-gray-300" 
                    placeholder="궁금하신 점이 있다면 남겨주세요."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-brand-green text-white py-5 font-semibold text-lg hover:bg-[#142e28] transition-all duration-300 tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                    상담 예약하기
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                  </p>
                </div>
              </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;