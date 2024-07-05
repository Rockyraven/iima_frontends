// import proPic from "../../public/assets/profile.png";
import { Link } from "react-scroll";
import proPic from "../../public/gallery/ch11.jpg";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4 mt-7" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2">
          <img src={proPic} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">

          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">Goa Reunion: Unforgettable Memories Await</h2>
          <p className="mt-4 md:pr-8 mb-8">
            Don't miss the IIMA Ahmedabad reunion in Goa! It's a once-in-a-lifetime chance to relive cherished memories, rekindle old friendships, and create unforgettable moments. Picture sunsets and laughter, deep conversations on the beach, and the joy of reconnecting with those who shaped your journey. This is where bonds deepen and hearts reunite.
            <p>Each one, if they have not already, please get your dorm mates, marketing group fellows, general bakar friends to join you in celebrating the 20 years of our batch from WIMWI!</p>
            <p><span className='font-bold'>Bonus :-</span>You can relive the memories of our 2019 reunion at campus. Yes, yes, many of us have tried hard to erase parts of the memories over the last few years - but well, here they are! 🙂</p>
          </p>
          
          {/* <Link to="contact" className="btn-primary">Get In Touch</Link> */}
        </div>
      </div>
    </div>
  );
};

export default About;
