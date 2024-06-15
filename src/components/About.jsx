// import proPic from "../../public/assets/profile.png";
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
          <p className="mt-8 md:pr-8 mb-8">
            Don't miss the IIMA Ahmedabad reunion in Goa! It's a once-in-a-lifetime chance to relive cherished memories, rekindle old friendships, and create unforgettable moments. Picture sunsets and laughter, deep conversations on the beach, and the joy of reconnecting with those who shaped your journey. This is where bonds deepen and hearts reunite.

          </p>
          <button className="btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
