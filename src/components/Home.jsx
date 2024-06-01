import React from 'react';
import banner from '../assets/front.jpg';
import './Home.css';

const colors = ["/assets/front.jpg", "/src/assets/banner2.JPG", "/src/assets/banner3.jpg"];
const delay = 2500;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="mt-3 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full">
          {/* <img src={banner} alt="Banner" className="w-full rounded-lg" /> */}
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {colors.map((backgroundColor, index) => (
                <img
                  className="slide"
                  key={index}
                  src={backgroundColor}
                ></img>
              ))}
            </div>

            <div className="slideshowDots">
              {colors.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/* Left side */}
        <div className="md:w-1/2 w-full mt-5">
          <h1 className="md:text-2xl text-xl font-bold text-headingcolor leading-snug md:leading-[60px]">
            Reunion 20 Years PGP 2004
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold text-headingcolor leading-snug md:leading-[60px] font-mono -mt-2">
           <span className="text-orange-600"> ABKI BAAR</span><span className="text-primary"> 150 </span><span className='text-green-600'>PAAR</span>
          </h1>
          <p className="text-md text-body leading-6 mb-8">
            Get ready for IIMA Ahmedabad's reunion in Goa, where spreadsheets turn into beach mats,
            case studies become cocktail anecdotes, and networking events transform into limbo
            competitions. It's a gathering where MBAs become Mai Tais, and the only numbers being
            crunched are sunscreen SPF ratings. So pack your flip flops, dust off your old textbooks
            (or use them as makeshift surfboards), and prepare for a reunion that's more "fun in the
            sun" than "boardroom blues."
          </p>
          <button className="btn-primary">Get In Touch</button>
        </div>
        {/* Right side */}
      </div>
    </div>
  );
};

export default Home;
