import React, { useEffect, useState } from "react";
import axios from "axios";
function Photos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((response) => {
        console.log(response.data[0].photos);
        setData(response.data[0].photos);
      })
      .catch(() => {
        alert("Error");
      });
  }, []);

  return (
    <div className="min-h-screen  bg-gray-200 mx-2">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <img src="/photos.png" alt="" className="h-32 md:h-60 lg:h-72" />
          <div className="uppercase text-5xl sm:text-8xl md:text-9xl lg:text-10xl font-bold py-16">
            HERE'S ME
          </div>
        </div>

        <div className="flex flex-wrap  justify-center items-center">
          {data.map((element) => (
            <div className="flex relative">
              <div class="lg:h-96 sm:h-72 h-60 p-4 ">
                <img
                  src={element}
                  alt=""
                  className="w-full h-full object-cover object-center  drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
