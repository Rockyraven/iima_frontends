import { useEffect, useState } from "react";

const Portfolio = () => {
  const data = Array.from({ length: 32 }, (_, index) => ({
    imageLink: `src/gallery/${index + 1}.jpg`,
  }));

  return (
    <>
      <h2 className="md:text-5xl text-4xl text-headingcolor font-bold ml-10 mt-6 mb-6">
        Gallery & Memories
      </h2>
      <div className="lg:mx-12 mx-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
    </>
  );
};

export default Portfolio;
