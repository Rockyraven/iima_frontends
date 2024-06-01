import React from "react";

import images from "./image";

import CustomSlider from "./custom.slider";


export default function Testimonials() {
  return (
    <div className="mx-12">

      <h1 className="text-5xl font-bold mt-4">Challenges</h1>
      <p className="text-xl text-red-600 mt-2 mb-2">Identify maximum batchmates and get one night free in goa
      </p>
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>

    </div>
  );
}
