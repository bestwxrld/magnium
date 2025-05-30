'use client';
import React, { useEffect, useRef, useState } from 'react';
import { HeroContentProps, VideoContentProps, LandingPageProps } from '../../dto/interfaces'; 
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

const LandingPage: React.FC<LandingPageProps> = ({ heroContent, videoContent }) => {
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (videoRef.current) {
        Object.assign(videoRef.current.style, {
          position: 'static',
          width: '100%',
          height: 'auto',
          top: 'auto',
          right: 'auto',
          left: 'auto',
          transform: 'none',
          transition: 'none',
          zIndex: 'auto',
          marginLeft: '0',
          marginRight: '0',
          marginBottom: videoContent.marginBottom || '1rem',
          overflow: 'hidden',
        });
      }
      if (heroTitleRef.current) {
        heroTitleRef.current.style.transform = 'none';
        heroTitleRef.current.style.opacity = '1';
      }
      if (lineRef.current) {
        lineRef.current.style.opacity = '1';
        lineRef.current.style.transform = 'none';
        lineRef.current.style.height = '60px';
      }
      return;
    }

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
        lineRef.current.style.height = `${(1 - progress) * 60}px`;
      }

      if (videoRef.current) {
        const maxScale = 2.7;
        const scale = Math.min(1 + 4 * progress, maxScale);
        videoRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, videoContent.marginLeft, videoContent.marginBottom]);

  const handleTelegramClick = () => {
    window.open('https://t.me/moxitech', '_blank');
  };

  const toggleMute = () => {
    if (videoElementRef.current) {
      const newMuted = !videoElementRef.current.muted;
      videoElementRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const renderVideoContent = () => {
    if (videoContent.useVideo) {
      return (
        <div className="relative w-full h-full">
          <video
            ref={videoElementRef}
            src={videoContent.videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <button
  onClick={toggleMute}
  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
  className="absolute top-2 right-2 z-50 p-2"
  type="button"
  style={{ color: '#155DFC' }}
>
  {isMuted ? (
    <FiVolumeX className="h-5 w-5" />
  ) : (
    <FiVolume2 className="h-5 w-5" />
  )}
</button>
        </div>
      );
    }
    return <div className="flex items-center justify-center w-full h-full text-white">Video Placeholder</div>;
  };

  return (
    <div className="font-['JetBrains_Mono'] antialiased text-gray-900 bg-white min-h-screen relative">
      {!isMobile && (
        <div className="fixed top-0 left-0 w-full pointer-events-none z-10">
          <div className="max-w-[1400px] mx-auto relative">
            <div className="absolute top-0 left-0 w-[2px] h-screen bg-gray-100"></div>
          </div>
        </div>
      )}

      <div className="xl:px-0 mx-auto xl:max-w-[1400px] w-full max-w-full">
        <div className="relative xl:border-l xl:mx-auto bg-white">
          <main className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-x-10 relative pt-24 px-8 pb-8">
            {isMobile ? (
              <section className="col-span-12 flex flex-col gap-8">
                <div
                  ref={videoRef}
                  className="w-full aspect-video overflow-hidden bg-[#1a1a1a]"
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: videoContent.marginBottom || '1rem',
                  }}
                >
                  {renderVideoContent()}
                </div>

                <div
                  ref={heroTitleRef}
                  className="transition-all duration-300 will-change-transform will-change-opacity"
                  style={{ transform: 'none', opacity: 1 }}
                >
                  <div className="relative inline-block whitespace-normal">
                    <div
                      ref={lineRef}
                      className="absolute top-0 left-[-90px] w-1 bg-cyan-400 transition-all duration-300 will-change-transform will-change-opacity"
                      style={{ height: '60px', opacity: 1, transform: 'none' }}
                    ></div>

                    <h2 className="text-2xl font-bold leading-tight mb-4 flex flex-col gap-1">
                      <span className="text-blue-600">{heroContent.highlightedText}</span>
                      <span>{heroContent.title}</span>
                    </h2>
                  </div>

                  <p className="text-base text-gray-600 leading-relaxed mb-6">{heroContent.description}</p>

                  <div className="flex flex-col gap-3">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors w-full cursor-pointer">
                      {heroContent.primaryButtonText}
                    </button>

                    <button
                      onClick={handleTelegramClick}
                      className="flex items-center justify-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xs text-base font-medium hover:bg-cyan-400/10 transition-colors w-full cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L15 22L11 13L2 9L22 2Z" />
                      </svg>
                      {heroContent.secondaryButtonText}
                    </button>
                  </div>
                </div>
              </section>
            ) : (
              <section className="col-span-12 grid grid-cols-12 items-center gap-16 py-16 relative min-h-screen">
                <div
                  ref={heroTitleRef}
                  className="transition-all duration-300 will-change-transform will-change-opacity max-w-[600px] col-span-6 relative"
                  style={{ transform: 'translate3d(0px, 0px, 0px)', opacity: 1 }}
                >
                  <div
                    ref={lineRef}
                    className="absolute -left-8 top-0 w-[3px] h-11 bg-cyan-400 transition-all duration-300 will-change-transform will-change-opacity"
                    style={{ opacity: 1, transform: 'none', height: '60px' }}
                  ></div>

                  <h2 className="mb-8 text-[30px] leading-[36px] md:leading-tight md:text-4xl lg:text-5xl flex items-center gap-4 whitespace-nowrap">
                    <span className="text-blue-600">{heroContent.highlightedText}</span>
                    <span>{heroContent.title}</span>
                  </h2>

                  <p className="mb-12 text-lg leading-normal md:text-lg">{heroContent.description}</p>

                  <div className="mb-8 space-x-5 flex">
                    <button className="font-medium rounded-xs transition inline-block duration-100 border border-transparent text-white bg-blue-600 hover:bg-blue-700 shadow-primary-button hover:shadow-primary-button-hover px-4 py-2 cursor-pointer">
                      {heroContent.primaryButtonText}
                    </button>

                    <button
                      onClick={handleTelegramClick}
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-xs bg-transparent hover:bg-cyan-400/10 transition-colors duration-200 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L15 22L11 13L2 9L22 2Z" />
                      </svg>
                      {heroContent.secondaryButtonText}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end w-full mt-20 md:mt-0 md:h-1 md:sticky md:top-28">
                  <div
                    ref={videoRef}
                    className="fixed top-24 max-w-[480px] max-h-[320px] aspect-video overflow-hidden bg-[#1a1a1a] text-white z-30"
                    style={{
                      left: 'calc(50% + 80px)',
                      right: 'auto',
                      width: '30vw',
                      height: 'auto',
                      marginLeft: videoContent.marginLeft,
                      marginBottom: videoContent.marginBottom,
                      transform: 'scale(1)',
                      transformOrigin: 'top right',
                      transition: 'transform 0.3s ease',
                      borderRadius: '0.5rem',
                    }}
                  >
                    {renderVideoContent()}
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
