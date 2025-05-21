'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 w-[calc(100%+1px)] z-10 px-4
        xl:px-16 py-7
        h-[var(--popover-top-offset)]
        will-change-transform transition-transform duration-300
        bg-white
        sticky-nav max-w-[1400px]
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-8 md:gap-12 lg:gap-20">
        {/* Логотип */}
        <div className="text-blue-600 text-2xl font-extrabold font-mono flex-shrink-0">
          Magnium
        </div>

        {/* Кнопка-бургер для мобильных <768 */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Навигация для >=768 */}
        <nav className="hidden md:flex gap-4 lg:gap-6 whitespace-nowrap">
          <a
            href="#"
            className="text-blue-900/50 hover:text-blue-600 transition-colors text-base font-medium"
          >
            Open Source
          </a>
          <a
            href="#"
            className="text-blue-900/50 hover:text-blue-600 transition-colors text-base font-medium"
          >
            Разработчики
          </a>
          <a
            href="#"
            className="text-blue-900/50 hover:text-blue-600 transition-colors text-base font-medium"
          >
            Партнёры
          </a>
        </nav>

        {/* Спейсер */}
        <div className="flex-grow hidden md:block" />

        {/* Поиск, кнопка, иконка */}
        <div className="hidden md:flex items-center gap-3 sm:gap-6 min-w-[280px] lg:min-w-[320px]">
          {/* Иконка */}
          <a
            href="https://gitlab.moxitech.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FC6D26">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
            </svg>
          </a>

          {/* Поиск */}
          <div className="relative hidden sm:block flex-grow">
            <input
              type="text"
              placeholder="Поиск"
              className="pl-10 pr-4 py-2 rounded text-sm border border-gray-200 outline-none focus:border-blue-600 bg-white/80 transition-colors w-full"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
                <path
                  d="M21 21L16.65 16.65"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Кнопка */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors flex-shrink-0 whitespace-nowrap">
            Документация
          </button>
        </div>
      </div>

      {/* Выпадающее меню для мобильных */}
      {isOpen && (
        <nav className="md:hidden mt-4 px-4 space-y-3 bg-white rounded-lg shadow-lg">
          <a
            href="#"
            className="block text-blue-900/70 hover:text-blue-600 transition-colors text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Open Source
          </a>
          <a
            href="#"
            className="block text-blue-900/70 hover:text-blue-600 transition-colors text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Разработчики
          </a>
          <a
            href="#"
            className="block text-blue-900/70 hover:text-blue-600 transition-colors text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Партнёры
          </a>

          {/* Поиск и кнопка в мобильном меню */}
          <div className="pt-2 border-t border-gray-200">
            <input
              type="text"
              placeholder="Поиск"
              className="w-full px-3 py-2 rounded text-sm border border-gray-300 outline-none focus:border-blue-600"
            />
            <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Документация
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
