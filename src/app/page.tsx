import LandingPage from './components/landing/LandingPage';
import EcosystemPage from './components/landing/Ecosystem';
import Navbar from './components/landing/Navbar';

export default function Home() {
  const heroContent = {
    title: "нового поколения",
    highlightedText: "IoT Маршрутизатор",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    primaryButtonText: "Подробнее",
    secondaryButtonText: "Telegram"
  };

  const videoContent = {
    width: '350px',
    height: '200px',
    marginLeft: '5rem',
    marginBottom: '2rem' // уменьшил для нормального отступа
  };

  return (
    <div className="bg-white px-4 xl:px-16 min-h-screen">
      <div className="xl:px-0 mx-auto xl:max-w-[1400px] w-full max-w-full">
        <div className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-x-10 relative">
          <div className="col-span-12 col-start-1 row-start-1">
            <Navbar />
            <LandingPage 
              heroContent={heroContent}
              videoContent={videoContent}
            />
            <EcosystemPage />
          </div>
        </div>
      </div>
    </div>
  );
}
