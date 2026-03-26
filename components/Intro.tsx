import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="intro" className="py-24 md:py-32 bg-brand-beige text-center px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="w-px h-16 bg-brand-gold mx-auto mb-10"></div>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-green leading-relaxed mb-8">
          "추모는 의식으로<br/>끝나지 않아야 합니다."
        </h2>
        <p className="text-brand-charcoal/80 leading-loose text-lg font-light">
          경춘공원은 안정적인 관리 체계와 넉넉한 공간 속에서<br className="hidden md:block"/>
          차분한 추모가 가능한 환경을 갖추고 있습니다.<br/><br/>
          여기에 전통(Jeontong)의 기획으로,<br className="hidden md:block"/>
          추모 이후의 시간을 배려한 체류형 일정이 자연스럽게 이어집니다.
        </p>
      </div>
    </section>
  );
};

export default Intro;