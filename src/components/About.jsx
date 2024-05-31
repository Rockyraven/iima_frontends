import proPic from "../assets/profile.png";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4 mt-7" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2">
          <img src={proPic} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">About me</h2>
          <p className="mt-8 md:pr-8 mb-8">
            Our reunions are more than just events; they are celebrations of our collective achievements and the unique bond we share as IIMA alumni. This website serves as your go-to resource for all reunion-related information, including event schedules, registration details, and exciting updates.
            <br /><br/>
            Explore our gallery to relive cherished memories, check out the list of attendees to see who’s joining, and stay informed about all planned activities. Whether you’re looking to network, catch up with old friends, or simply reminisce about your time at IIMA, this reunion promises to be an unforgettable experience.
          </p>
          <button className="btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
