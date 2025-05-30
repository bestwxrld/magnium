interface FooterColumnProps {
    title: string;
    links: { href: string; label: string }[];
    colSpan: string;
  }
  
  const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, colSpan }) => {
    const titleClass = "text-[#201155] text-lg font-medium font-['JetBrains_Mono'] mb-4";
    const linkClass = "text-[#201155]/50 text-sm font-normal font-['JetBrains_Mono'] hover:text-[#201155]/80";
  
    return (
      <div className={colSpan}>
        <h4 className={titleClass}>{title}</h4>
        <ul className="flex flex-col space-y-4">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const FooterRight: React.FC = () => {
    return (
      <div className="col-span-12 z-index: 50 max-w-full w-full bg-white md:col-span-9 grid grid-cols-12 gap-x-6 gap-y-12">
        <FooterColumn
          title="Ресурсы"
          links={[
            { href: '#', label: 'Документация' },
            { href: '#', label: 'Блог' },
            { href: '#', label: 'Партнёры' },
            { href: '#', label: 'Новости' },
            { href: '#', label: 'Релизы' },
          ]}
          colSpan="col-span-6 md:col-span-3"
        />
        <FooterColumn
          title="Продукты"
          links={[
            { href: '#', label: 'Magnium' },
            { href: '#', label: 'MagniumOS' },
            { href: '#', label: 'Magnium Cloud' },
            { href: '#', label: 'Magcard' },
          ]}
          colSpan="col-span-6 md:col-span-3"
        />
        <FooterColumn
          title="Загрузки"
          links={[
            { href: '#', label: '' },
            { href: '#', label: '' },
            { href: '#', label: '' },
            { href: '#', label: '' },
          ]}
          colSpan="col-span-6 md:col-span-3"
        />
      </div>
    );
  };
  
  export default FooterRight;
  