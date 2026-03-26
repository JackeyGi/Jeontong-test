import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Location Section */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-brand-green">
              <MapPin className="w-5 h-5" />
              <span className="font-bold tracking-wide">LOCATION</span>
            </div>
            <h3 className="font-serif text-3xl text-brand-charcoal mb-4">서울 40분, 그리울 때<br/>언제든 찾을 수 있는 거리</h3>
            <p className="text-gray-500 font-light">가평역 인근, 남이섬과 자라섬이 10분 거리에 위치합니다.</p>
          </div>
          <div className="flex flex-col gap-4 text-right">
             <div className="flex items-center gap-4 justify-end">
               <span className="text-sm text-gray-400 uppercase tracking-widest">무료 상담 번호</span>
               <span className="font-serif text-2xl text-brand-green">1599-3485</span>
             </div>
             <p className="text-sm text-gray-400">365일 연중무휴 상담 가능</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <span>강원도 춘천시 남산면 광판리 산 1-1</span>
            <span className="hidden md:inline">|</span>
            <span>재단법인 경춘공원묘원 x 전통 장묘 장례 플랫폼</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-green transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-brand-green transition-colors">이용약관</a>
          </div>
          <div>
            © {new Date().getFullYear()} Jeontong platform. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;