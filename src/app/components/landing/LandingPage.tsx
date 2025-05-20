'use client';
import React, { useEffect, useRef } from 'react';
import { HeroContentProps, VideoContentProps, LandingPageProps } from '../../dto/interfaces';
import Navbar from './Navbar';

const LandingPage: React.FC<LandingPageProps> = ({ heroContent, videoContent }) => {
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 190;
      const progress = Math.min(scrollY / maxScroll, 1);

      const translateY = -42.1 * progress;
      const opacity = 1 - progress;

      if (heroTitleRef.current) {
        heroTitleRef.current.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
        heroTitleRef.current.style.opacity = `${opacity}`;
      }

      if (lineRef.current) {
        lineRef.current.style.opacity = `${opacity}`;
        lineRef.current.style.transform = `translateY(${translateY}px)`;
        lineRef.current.style.height = `${(1 - progress) * 60}px`; // 60px → 0
      }

      if (videoRef.current) {
        const scale = 1 + (4 * progress);
        videoRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 relative font-sans">
      {/* Вертикальная серая линия фиксированная по всей высоте */}
      <div className="fixed top-0 left-0 w-full pointer-events-none z-10">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="absolute top-0 left-0 w-[2px] h-screen bg-gray-100"></div>
        </div>
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto pt-24 px-8 pb-8 flex flex-col gap-12">
        <section className="flex items-center gap-16 py-16 relative min-h-screen">
          {/* Видео блок */}
          <div
            ref={videoRef}
            className="fixed w-1/5 aspect-video [transform-origin:top_right] [transition:transform_0.7s_cubic-bezier(0.25,_0.46,_0.45,_0.94)] will-change-transform z-999 overflow-hidden bg-[#1a1a1a]"
            style={{
              right: '25%',
              width: videoContent.width || '29.2761%',
              top: '10%',
              marginLeft: videoContent.marginLeft,
              marginBottom: videoContent.marginBottom
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white">
              Video Placeholder
            </div>
          </div>

          {/* Блок заголовка и текста */}
          <div
            ref={heroTitleRef}
            className="transition-all duration-300 will-change-transform will-change-opacity"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
              opacity: 1
            }}
          >
            <div className="relative inline-block">
              {/* Синяя вертикальная линия */}
              <div
                ref={lineRef}
                className="absolute top-0 left-[-90px] w-1 bg-cyan-400 transition-all duration-300 will-change-transform will-change-opacity"
                style={{
                  height: '60px',
                  opacity: 1,
                  transform: 'translateY(0px)'
                }}
              ></div>

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
