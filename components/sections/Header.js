import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { Fade, Slide } from "react-awesome-reveal";

const Header = () => {
  return (
    <div className="min-h-screen relative w-full flex flex-col py-4">
      <div className="z-20 h-full flex flex-col sm:justify-center sm:items-start items-center relative">
        <Slide className="mb-6">
          <span
            className={`uppercase  text-5xl sm:text-8xl md:text-9xl lg:text-10xl font-bold tracking-tighter`}
          >
            Praveen
          </span>
        </Slide>
        <Slide className="leading-3" direction="right">
          <span
            className={`leading-3 uppercase  text-5xl sm:text-8xl md:text-9xl lg:text-10xl  font-bold tracking-tighter`}
          >
            Pasupuleti
          </span>
        </Slide>
        <h1
          data-aos="fade-right"
          className="font-bold  text-5xl sm:text-8xl md:text-9xl lg:text-10xl mt-6 uppercase tracking-tighter text-transparent"
          style={{
            WebkitTextStrokeWidth: "3px",
            WebkitTextStrokeColor: "black",
          }}
        >
          {
            <Typewriter
              loop={true}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Photographer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("The Artist")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("The Writer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("The Traveller")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcomes You")
                  .start();
              }}
            />
          }
        </h1>
      </div>
      <div>
        <img
          src="/hero.jpg"
          alt=""
          className="absolute grayscale duration-1000 hover:grayscale-0 sm:h-full right-0 top-1/2 sm:-translate-y-1/2 -translate-y-1/4"
        />
      </div>
    </div>
  );
};

export default Header;
