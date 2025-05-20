'use client';

import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-start items-center gap-20">
        {/* Блок с логотипом */}
        <div className="text-blue-600 text-2xl font-extrabold font-mono">
          Magnium
        </div>

        {/* Навигация ближе к логотипу */}
        <nav className="hidden md:flex gap-4 lg:gap-6"> 
          <a href="#" className="text-blue-900/50 hover:text-blue-600 transition-colors text-base font-medium">
            Open Source
          </a>
          <a href="#" className="text-blue-900/50 hover:text-blue-600 transition-colors text-base font-medium">
            Разработчики
          </a>
          <a href="#" className="text-blue-900/50 hover:text-blue-600 transition-colors text-base font-medium">
            Партнёры
          </a>
        </nav>

        {/* Спейсер чтобы отжать правую часть */}
        <div className="flex-grow" />

        {/* Поиск, кнопка, иконка */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FC6D26">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
            </svg>
          </a>

          {/* Поле поиска */}
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Поиск" 
              className="pl-10 pr-4 py-2 rounded text-sm border border-gray-200 outline-none focus:border-blue-600 bg-white/80 transition-colors"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="1.5"/>
                <path d="M21 21L16.65 16.65" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Кнопка */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
            Документация
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
