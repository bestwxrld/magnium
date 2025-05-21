import LandingPage from './components/landing/LandingPage';

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
    marginBottom: '2rem'  // уменьшил для нормального отступа
  };

  return (
    <LandingPage 
      heroContent={heroContent}
      videoContent={videoContent}
    />
  );
}
