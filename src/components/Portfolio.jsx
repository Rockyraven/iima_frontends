import { useEffect, useState } from "react";

const Portfolio = () => {
  const data = Array.from({ length: 32 }, (_, index) => ({
    imageLink: `/gallery/${index + 1}.jpg`,
  }));

  return (
    <>
    <div id="union">
      <h2 className="md:text-5xl text-4xl text-headingcolor font-bold ml-10 mt-10 mb-6">
         15years Reunion Pictures
      </h2>
      <div className="lg:mx-12 mx-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-[300px] w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt={`gallery-photo-${index}`}
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Portfolio;
