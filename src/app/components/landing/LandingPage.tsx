// src/components/landing/LandingPage.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import { HeroContentProps, VideoContentProps, LandingPageProps } from '../../dto/interfaces';
import Navbar from '././Navbar';

const LandingPage: React.FC<LandingPageProps> = ({ heroContent, videoContent }) => {
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrollY / maxScroll, 1);
      
      if (heroTitleRef.current) {
        const translateY = -42.1 * progress;
        const opacity = 1 - progress;
        heroTitleRef.current.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
        heroTitleRef.current.style.opacity = `${opacity}`;
      }

      if (videoRef.current) {
        const scaleX = 1 + (2.416 * progress);
        const scaleY = 1 + (0.68 * progress);
        videoRef.current.style.transform = `scale(${scaleX}, ${scaleY})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 relative font-sans">

      {/* Вертикальная серая линия по всей высоте, фиксированная */}
      <div className="fixed top-0 left-0 w-full pointer-events-none z-10">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="absolute top-0 left-0 w-[2px] h-screen bg-gray-100"></div>
        </div>
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto pt-24 px-8 pb-8 flex flex-col gap-12">
        <section className="flex items-center gap-16 py-16 relative min-h-screen">

          {/* Video container */}
          <div 
            ref={videoRef}
            className="fixed w-1/5 aspect-video transition-transform duration-600 will-change-transform z-20 overflow-hidden bg-gray-900"
            style={{
              right: '25%',
              top: '10%',
              marginLeft: videoContent.marginLeft,
              marginBottom: videoContent.marginBottom
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white">
              Video Placeholder
            </div>
          </div>

          {/* Hero content с линией, привязанной к заголовку */}
          <div 
            ref={heroTitleRef}
            className="transition-all duration-400 will-change-transform,opacity"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
              opacity: 1
            }}
          >
            <div className="relative inline-block">
              {/* Вертикальная синяя линия слева от заголовка */}
              <div className="absolute top-0 left-[-90px] w-1 h-15 bg-cyan-400"></div>

              <h1 className="text-5xl font-bold leading-tight mb-6">
                <span className="text-blue-600">{heroContent.highlightedText}</span> {heroContent.title}
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-[600px] mb-8">
              {heroContent.description}
            </p>
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors">
                {heroContent.primaryButtonText}
              </button>
              <button className="px-6 py-3 bg-cyan-400/40 text-blue-900 rounded-lg text-base font-medium hover:bg-cyan-400/60 transition-colors">
                {heroContent.secondaryButtonText}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
