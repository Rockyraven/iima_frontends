import React from 'react';
// import banner from '../assets/front.jpg';
import './Home.css';
import { Link } from 'react-scroll';

const colors = ["/assets/front.jpg", "/assets/banner2.JPG", "/assets/banner3.jpg", "/assets/reunion.jpeg", "/assets/chh1.jpeg", "/assets/chh2.jpeg", "/assets/chh3.jpeg"];
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
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between pt-24 pb-10 gap-5">
        <div className="md:w-1/2 w-full">
          {/* <img src={banner} alt="Banner" className="w-full rounded-lg" /> */}
          <div className="slideshow mt-6">
            <div
              className="slideshowSlider "
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
            <span className="text-orange-600"> BEES</span><span className="text-primary"> SAAL </span><span className='text-green-600'>BAAD</span>
          </h1>
          <p className="text-md text-body leading-6 mb-1">
            WIMWI 2004 Reunites Once Again!
            WIMWIans of 2004 - here we are finally. After all the preparations, polling, and polite calls to join in, this is when we ask for you to put the money on the table.
            <br />
            The Bees Saal Baad reunion on Sat, Dec 21 to Mon, Dec 23, 2024 at Caravela Resort, South Goa.
          </p>
          <p className="text-md text-body leading-6 mb-4 mt-3">
            <p>
              <span className='font-bold'>Two payments to be made by you to lock-in your participation:</span> <br />
              (1) A payment of Rs 31,416/- (equal to 10,000 pi) per family. This is early bird pricing - after Jul 31, the charges will be Rs 35,000/-. <br />Yes, if you married a batchmate, just like in 2019, you pay only once.<br />
              (2) Hotel payment to be done directly to Caravela hotel. We will notify you post registration on how hotel payment will be done.
              <br /><Link to='price' smooth={true}
                spy={true}
                offset={-100} className='text-blue-500 cursor-pointer underline'> Hotel tariff is provided in the pricing section</Link>
              <br />

              <div className='flex justify-left items-center my-4'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPNebrgQc8_BIxkmUfhFAgHjfO07G5JCNQV6dWc6IlL4scbw/viewform?usp=sf_link" className='text-lg mr-5 text-green-600'>Register here</a>
                <div>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPNebrgQc8_BIxkmUfhFAgHjfO07G5JCNQV6dWc6IlL4scbw/viewform?usp=sf_link">
                    <button className="py-2 px-3 bg-blue-600 rounded-xl text-white font-semibolds">Register</button>
                  </a>
                </div>


              </div>
              <span className='font-bold'>Venue :- </span><a href='https://www.caravelabeachresortgoa.com/' className='text-blue-500 underline'>https://www.caravelabeachresortgoa.com</a></p>
            <span className='font-bold'>Bonus :-</span>You can relive the memories of our 2019 reunion at campus. Yes, yes, many of us have tried hard to erase parts of the memories over the last few years - but well, here they are! 🙂

          </p>
        </div>
        {/* Right side */}
      </div>
    </div>
  );
};

export default Home;
