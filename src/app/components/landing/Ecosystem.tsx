'use client';

import React, { useState, useRef, useEffect } from 'react';

const tabs = [
    {
        label: 'Дом',
        content: 'Картинка и текст для Дом',
        image: '/images/home.jpg', 
    },
    {
        label: 'Предприятие',
        content: 'Картинка и текст для Предприятие',
        image: '/images/factory.jpg',
    },
    {
        label: 'Бизнес',
        content: 'Картинка и текст для Бизнес',
        image: '/images/business.jpg',
    },
];

const EcosystemPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('Дом');
    const [underlineStyles, setUnderlineStyles] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const index = tabs.findIndex(tab => tab.label === selectedTab);
        const currentTab = tabsRef.current[index];
        if (currentTab) {
            setUnderlineStyles({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth,
            });
        }
    }, [selectedTab]);

    const selected = tabs.find(tab => tab.label === selectedTab);

    return (
        <div className="w-full bg-white relative overflow-hidden font-['JetBrains_Mono'] px-4 lg:px-12">
            <div className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-x-10 col-span-12 mt-12 lg:mt-20">
                <div className="col-span-1 relative">
                    <div className="absolute left-[-46px] w-[2px] h-[50px] bg-cyan-400 rounded"></div>
                </div>

                <div className="col-span-2 relative mt-2 h-[48px]">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#3d5bf1] absolute w-12 h-12 top-[-8px]
                                   left-[-20px] sm:left-[-30px] md:left-[-40px] lg:left-[-90px]"
                    >
                        <path
                            d="M9.5 20.5L14.5 3.5M18.5 7.5L22.5 12L18.5 16.5M5.5 16.5L1.5 12L5.5 7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                        />
                    </svg>
                </div>

                <div className="col-span-8 flex items-center text-[#3d5bf1] text-[32px] font-medium relative">
                    <span
                        className="relative left-[-10px] sm:left-[-15px] md:left-[-25px] lg:left-[-90px] 2xl:left-[-220px] transform 2xl:-translate-y-0.5"
                    >
                        Экосистема
                    </span>
                </div>

                <div className="col-span-12 mt-8">
                    <h2 className="text-3xl font-semibold text-black leading-tight">
                        Устройство под любые ваши потребности
                    </h2>
                    <p className="text-lg text-[#201155]/60 mt-2 max-w-3xl">
                        Вот некоторые кейсы применения:
                    </p>
                </div>

                <div className="col-span-12 relative mt-8">
                    <div className="flex gap-8 relative border-b border-black">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.label}
                                ref={el => { tabsRef.current[index] = el; }}
                                className={`text-2xl font-semibold cursor-pointer transition ${
                                    selectedTab === tab.label
                                        ? 'text-[#3d5bf1]'
                                        : 'text-[#201155]/50 hover:text-[#3d5bf1]'
                                    } pb-2`}
                                onClick={() => setSelectedTab(tab.label)}
                            >
                                {tab.label}
                            </div>
                        ))}

                        <span
                            className="absolute bottom-0 h-1 bg-[#3d5bf1] transition-all duration-300 ease-in-out"
                            style={{ left: underlineStyles.left, width: underlineStyles.width }}
                        />
                    </div>
                </div>

                <div className="col-span-12 bg-[#d9d9d9] mt-8 p-6 min-h-[400px] relative flex items-center justify-center">
                    {selected?.image ? (
                        <img
                            src={selected.image}
                            alt={selected.label}
                            className="max-h-[360px] w-auto object-contain rounded shadow"
                        />
                    ) : (
                        <div className="text-black text-lg font-normal">
                            {selected?.content}
                        </div>
                    )}

                    <div className="absolute bottom-4 left-4 text-3xl font-semibold text-[#3d5bf1]">
                        Одна вместо сотни
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcosystemPage;
