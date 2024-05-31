import banner from "../assets/front.jpg";



const Home = () => {
  return (
    <div className="mt-3 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full">
          <img src={banner} alt="" className="w-full rounded-lg" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          {/* <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am John</p> */}
          <h1 className="md:text-5xl text-3xl font-bold text-headingcolor leading-snug md:leading-[60px]  mb-5 ">
            Welcome to <span className="text-primary">IIMA AHMEDABAD </span>REUNION
          </h1>
          <p className="text-md text-body leading-6 mb-8 ">
            Get ready for IIMA Ahmedabad's reunion in Goa, where
            spreadsheets turn into beach mats, case studies become
            cocktail anecdotes, and networking events transform into limbo
            competitions. It's a gathering where MBAs become Mai Tais, and
            the only numbers being crunched are sunscreen SPF ratings. So
            pack your flip flops, dust off your old textbooks (or use them as
            makeshift surfboards), and prepare for a reunion that's more
            "fun in the sun" than "boardroom blues."
          </p>
          <button className="btn-primary">Get In Touch</button>
        </div>
        {/* rigth side */}

      </div>
    </div>
  );
};

export default Home;
