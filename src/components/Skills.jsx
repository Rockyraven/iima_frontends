const skills = [
    {
      id: 1,
      name: "Reconnect with Classmates",
      description:
        "Reconnect with classmates and relive the cherished memories of your time at IIMA Ahmedabad. Rekindle old friendships, share life updates, and create new memories together. Whether reminiscing about past adventures or forging new connections.",
      image: "/assets/skills-1.png",
    },
    {
      id: 2,
      name: "Beach Olympics",
      description:
        "Engage yourself in exhilarating beachside games From sandcastle competitions to beach volleyball tournaments, our curated list promises endless fun      and team-building opportunities against the backdrop of the serene sea",
      image: "/assets/skills-2.png",
    },
    {
      id: 3,
      name: "Dinner date with singing and dancing",
      description:
        "Kick off the dinner date with a karaoke setup, adding a fun and interactive element to the evening. Sing your heart out and create unforgettable memories in the company of colleagues.",
      image: "/assets/skills-3.png",
    },
    {
      id: 4,
      name: "FIRST MEALIN GOA",
      description:
        "Enjoy the intimate ambiance with a onepiece band, serenading you with soulful        melodies. Immerse yourself in the music as it        sets the perfect backdrop for your        memorable moments in Goa.        ",
      image: "/assets/skills-4.png",
    },
  ];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4" id="skills">
      <div className="mb-10">
        {/* <p className="text-xl text-headingcolor font-semibold mb-5">
          Facts
        </p> */}
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">Fun in Goa</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-5"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
