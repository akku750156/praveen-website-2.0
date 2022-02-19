import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Art() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    axios
      .get("http://localhost:3001/get")
      .then((response) => {
        console.log(response.data[0].arts);
        setData(response.data[0].arts);
      })
      .catch(() => {
        alert("Error");
      });
  }, []);

  return (
    <div className="min-h-screen relative w-full md:py-32 py-16">
      <div className="z-20 h-full flex justify-center items-center relative">
        <div className="uppercase text-5xl sm:text-8xl md:text-9xl lg:text-10xl font-bold py-8 ">
          ARTS
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center items-center">
          <div data-aos="fade-up">
            <img
              src={data[0]}
              alt=""
              className="lg:h-128 md:h-96 sm:h-72 h-60 p-2"
            />
          </div>
          <div data-aos="fade-up">
            <img
              src={data[1]}
              alt=""
              className="lg:h-128 md:h-96 sm:h-72 h-60 p-2"
            />
          </div>
          <div data-aos="fade-up">
            <img
              src={data[2]}
              alt=""
              className="lg:h-128 md:h-8960 sm:h-72 h-60 p-2"
            />
          </div>
        </div>
      </div>
      <div>
        <Link href="/Arts" passHref>
          <button className="shadow-[10px_15px_20px_rgba(0,0,0,0.3)_inset] hover:shadow-[10px_15px_20px_rgba(255,255,255,0.3)_inset] sm:h-40 sm:w-40 h-32 w-32  hover:text-xl hover:bg-black hover:text-white rounded-full bg-white absolute sm:bottom-[0%] sm:left-[70%] bottom-[0%] left-[30%] transition-all">
            MORE ME
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Art;
