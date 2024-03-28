import React, { useState, useEffect } from 'react';

const MainPage = () => {
  const videoSrc = 'https://firebasestorage.googleapis.com/v0/b/epic-designers-builders.appspot.com/o/bg.mp4?alt=media&token=1f5ed49f-5c38-4b79-b6c0-1006a73b992b';
  const scrollToFooter = (sectionId) => {
    const footerElement = document.getElementById(sectionId);
    footerElement.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu after clicking on a link
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="min-h-[100vh] flex justify-center items-center relative dark:bg-gray-950 text-white duration-200" id='home'>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Video background */}
        <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container pb-8 sm:pb-0 relative z-10">
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold">
                Transform Your Dreams into Reality With{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-8xl">
                  EPIC
                </span>{" "}
                Designs
              </h1>
              <p className="text-base">
                Don't let your dreams stay just dreams. Turn them into reality with our expertise and guidance.
              </p>
              <div>
                <button onClick={() => scrollToFooter("footer")} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
