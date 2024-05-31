const skills = [
    {
      id: 1,
      name: "Reconnect with Classmates",
      description:
        "Reunite with old friends and classmates to reminisce about shared experiences and create new memories.",
      image: "src/assets/skills-1.png",
    },
    {
      id: 2,
      name: "Networking Opportunities",
      description:
        "Reunions offer a chance to network with alumni, potentially leading to career opportunities and professional collaborations.",
      image: "src/assets/skills-2.png",
    },
    {
      id: 3,
      name: "Alumni Achievements",
      description:
        "Celebrate the accomplishments of your peers with special recognition and awards for notable alumni.",
      image: "src/assets/skills-3.png",
    },
    {
      id: 4,
      name: "Faculty Interaction",
      description:
        "Meet and greet with former professors and staff who played pivotal roles in your educational journey.",
      image: "/src/assets/skills-4.png",
    },
  ];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4" id="skills">
      <div className="mb-10">
        {/* <p className="text-xl text-headingcolor font-semibold mb-5">
          Facts
        </p> */}
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">Facts of Reunion</h2>
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
