import React from "react";

import images from "./image";
import    ch1 from "/public/assets/ch1.png"
import    ch2 from "/public/assets/ch2.png"
import    ch3 from "/public/assets/ch3.png"
import    ch4 from "/public/assets/ch4.png"

import CustomSlider from "./custom.slider";


export default function Testimonials() {

  // const image = [ "../../public/assets/ch2.jpg", "/assets/ch2.jpg","/assets/ch3.jpg", "/assets/ch4.jpg"];
  const images = [
    {
      imgURL:
        ch1,
      imgAlt: "img-1"
    },
    {
      imgURL:
      ch2,
      imgAlt: "img-2"
    },
    {
      imgURL:
      ch3,
      imgAlt: "img-3"
    },
    {
      imgURL:
      ch4,
      imgAlt: "img-4"
    }
  ];

  return (
    <div className="mx-12">

      <h1 className="text-5xl font-bold mt-4">Challenges</h1>
      <p className="text-xl text-red-600 mt-2 mb-2">Identify maximum batchmates in these 4 pictures from 15 year reunion and get a chance to win 1 night free stay in Goa
      </p>
      <CustomSlider>
        {images.map((image, index) => {
        return  <img  src={image?.imgURL} alt="ch1" />;
        })}
         {/* <img  src={ch2} alt="ch2" />;
         <img  src={ch3} alt="ch3" />;
         <img  src={ch4} alt="ch4" />; */}
      </CustomSlider>

    </div>
  );
}
