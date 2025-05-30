'use client';
import React, { useState, useEffect } from 'react';

const tabs = ["Magnium", "MagniumOS", "Magnium Cloud", "Magcard", "..."];

const Logo = ({ src, alt }: { src: string; alt: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <img
      src={src}
      alt={alt}
      className="h-8 object-contain"
      onError={() => setIsVisible(false)}
    />
  );
};

export const TechnologiesBlock = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderContent = (title: string, description: string, image: string, position = '25% -75%') => (
    <div className="relative h-full w-full text-[#201155]">
      {isMobile ? (
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute top-50 left-[25%] w-full h-full object-cover"
            style={{ transform: 'translateX(-25%)' }}
          />
          <div className="absolute inset-0 p-6 z-10">
            <h4 className="text-2xl font-bold mb-2">{title}</h4>
            <p className="text-base">{description}</p>
          </div>
        </div>
      ) : (
        <div
          className="p-6 h-full text-[#201155] relative"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: position,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h4 className="text-2xl font-bold mb-2 z-10 relative">{title}</h4>
          <p className="text-base mb-4 z-10 relative">{description}</p>
        </div>
      )}
    </div>
  );

  const tabContent: Record<string, React.ReactNode> = {
    Magnium: renderContent(
      "Magnium",
      "Базовая технологическая платформа для всех наших решений. Оптимизирована под высокую производительность и модульность.",
      "/MAGNIUM_PCB.png"
    ),
    MagniumOS: renderContent(
      "MagniumOS",
      "Наша собственная операционная система для IoT роутера Magnium.",
      "/MAGNIUM_PCB.png"
    ),
    "Magnium Cloud": renderContent(
      "Magnium Cloud",
      "Облачная инфраструктура для мониторинга и удаленного управления Magnium. Полная интеграция с MagniumOS.",
      "/MAGNIUM_PCB.png"
    ),
    Magcard: renderContent(
      "Magcard",
      "Универсальные модули lora, zegbee, BLE и многие другие.",
      "/MAGNIUM_PCB.png"
    ),
    "...": renderContent(
      "И многое другое",
      "Мы постоянно расширяем экосистему Magnium, чтобы охватывать новые сферы применения технологий.",
      "/MAGNIUM_PCB.png"
    ),
  };

  const logos = [
    "/header_logo.png",
    "/logos/netflix.svg",
    "/logos/apple.svg",
    "/logos/spotify.svg",
  ];

  return (
    <div className="w-full bg-white relative overflow-hidden font-['JetBrains_Mono'] px-4 lg:px-12">
      <div className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-x-10 relative">
        <div className="grid grid-cols-subgrid col-span-12 mt-20 lg:mt-32">
          <div className="col-span-1 relative">
            <div className="absolute left-[-46px] w-[2px] h-[50px] bg-cyan-400"></div>
          </div>

          <div className="grid grid-cols-subgrid col-span-12 mb-12">
            <div className="col-span-12 lg:col-span-3">
              <h3 className="relative flex items-center font-mono text-[15px] lg:text-base leading-none text-[#3d5bf1] pl-0 sm:pl-2 md:pl-4 lg:pl-6">
                <span className="mr-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.5 20.5L14.5 3.5M18.5 7.5L22.5 12L18.5 16.5M5.5 16.5L1.5 12L5.5 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
                <span className="text-[32px] ml-5 lg:text-3xl font-medium">Технологии</span>
              </h3>
            </div>

            <div className="col-span-12 mt-9 lg:mt-0 lg:col-span-6 lg:text-right lg:-mr-84 lg:pl-60">
              <h3 className="mb-4 text-2xl leading-tight sm:text-3xl lg:text-4xl text-[#201155] font-mono font-normal lg:text-right">
                Наши технологии
              </h3>
              <p className="hidden sm:block text-base leading-normal text-[#201155]/70 font-normal font-mono lg:text-right">
                Простые и эффективные решения для стабильной и удобной разработки.
                Каждый инструмент разрабатыватывается с заботой о производительности и удобстве.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <ul className="flex mb-10 overflow-x-auto lg:overflow-x-visible font-medium leading-normal lg:text-xl lg:mb-0 lg:block lg:space-y-4 text-[#201155]/70"
              role="tablist">
            {tabs.map((tab) => {
              const isSelected = selectedTab === tab;
              return (
                <li key={tab} className="flex-shrink-0 lg:flex-shrink snap-start lg:snap-none">
                  <span className="flex items-center border-b border-[#201155]/30 lg:border-none pr-4 lg:pr-0">
                    <button
                      className={`flex items-center pb-3 text-left border-b-2 cursor-pointer lg:pb-0 lg:border-0 ${isSelected ? "text-[#201155] border-[#201155]" : "border-transparent"}`}
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`panel-${tab}`}
                      id={`tab-${tab}`}
                      onMouseEnter={() => setSelectedTab(tab)}
                    >
                      {tab}
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <div role="tabpanel" id={`panel-${selectedTab}`} aria-labelledby={`tab-${selectedTab}`}
               className="relative overflow-hidden h-[400px]">
            {tabContent[selectedTab]}
          </div>
        </div>

        <div className="grid grid-cols-subgrid col-span-12 mt-12 md:mt-24">
          <p className="col-span-12 text-lg font-medium lg:col-span-3 text-[#201155]">
            Компании, которые нам доверяют
          </p>

          <div className="relative col-span-12 mt-8 lg:mt-0 lg:col-span-9 overflow-hidden">
            <div className="w-max flex space-x-6 animate-marquee">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-12 w-32 flex items-center justify-center rounded"
                >
                  <Logo src={logo} alt={`Logo ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesBlock;
