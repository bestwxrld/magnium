const FooterLeft: React.FC = () => {
    return (
      <div className="col-span-12 z-index: 50 bg-white lg:col-span-3 lg:mt-14">
        {/* Верхний текст */}
        <p className="text-[#201155]/50 font-bold font-['JetBrains_Mono'] text-base">
          Magnium - Technological IoT router
        </p>
  
        <ul className="flex items-center max-w-full w-full justify-start my-8 space-x-6 lg:my-16">
          {/* GitLab icon */}
          <li>
            <a
              href="https://gitlab.moxitech.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
              aria-label="GitLab"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FC6D26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
              </svg>
            </a>
          </li>
  
          {/* Telegram icon - classic paper plane */}
          <li>
            <a
              href="https://gitlab.moxitech.ru"
              title="Telegram"
              className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0088cc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </a>
          </li>
        </ul>
  
        {/* Нижний текст */}
        <p className="text-[#201155]/50 font-medium font-['JetBrains_Mono'] text-sm mt-3 mb-5 md:mb-0">
            © 2025 Magnium
        </p>
      </div>
    );
  };
  
  export default FooterLeft;
  