import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Card({ image, heading, description }) {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  });
  return (
    <div className=" card sticky my-8 drop-shadow-lg top-[15%] flex flex-col  w-[100vh] text-white text-center justify-center items-center bg-[#AF8F6F] p-4 rounded-xl">
      <div className="h-[220px] w-[220px] ">
        <img src={image} alt="img" className="h-full w-full object-fill my-4" />
      </div>

      {/* <Canvas className="h-[520px] w-[520px]">
        <ambientLight />
        <Image3D image={image} />
      </Canvas> */}
      <h1 className="font-thin text-2xl">
        The <br /> <span className="font-bold">{heading}</span>
      </h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired, // image must be a string and is required
  heading: PropTypes.string.isRequired, // heading must be a string and is required
  description: PropTypes.string.isRequired, // description must be a string and is required
};

export default Card;
