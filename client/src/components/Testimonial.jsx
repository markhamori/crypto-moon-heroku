import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Testimonial = () => {
  const [currentPerson, setCurrentPerson] = useState(0);

  const testObject = {
    0: {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    1: {
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum.",
      image:
        "https://images.pexels.com/photos/157606/girl-black-dress-portrait-hair-157606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    2: {
      name: "George Doe",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum.",
      image:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    3: {
      name: "Emily Doe",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum.",
      image:
        "https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  };

  const rightArrow = () => {
    if (currentPerson < Object.keys(testObject).length - 1)
      setCurrentPerson(currentPerson + 1);
  };

  const leftArrow = () => {
    if (
      currentPerson <= Object.keys(testObject).length - 1 &&
      currentPerson !== 0
    )
      setCurrentPerson(currentPerson - 1);
  };

  return (
    <div className="relative">
      <div className="absolute w-full min-h-full md:w-1/2 left-1/2 -translate-x-1/2 md:h-[90vh] opacity-20 bg-gradient-to-r from-second to-basic blur-[200px]" />
      <section id="testimonial" className="relative bg-zinc-900 drop-shadow-lg">
        <div className="relative container overflow-hidden">
          <div className="absolute left-32 top-12 text-second opacity-5 text-[100px]">
            +
          </div>
          <div className="absolute left-16 top-0 text-second opacity-5 text-[60px]">
            +
          </div>
          <div className="absolute left-64 top-12 text-second opacity-5 text-[30px]">
            +
          </div>
          <div className="absolute right-12 bottom-12 text-second opacity-5 text-[150px]">
            +
          </div>
          <h1 className="hidden md:absolute md:block md:right-[-500px] text-zinc-800 lg:-right-52 top-12 text-[200px] opacity-10">
            Testimonals
          </h1>
          <div className="flex items-center min-h-screen pt-20 pb-10 md:pt-40 md:pb-40">
            <div className="flex w-full flex-row items-center justify-center mt-20 mb-20 md:mt-0 md:mb-0">
              <div className="flex flex-1 justify-start">
                <FontAwesomeIcon
                  className="text-basic text-2xl md:text-3xl cursor-pointer hover:text-[#74e7fc] hover:scale-105 transition-all z-20"
                  icon={faAngleLeft}
                  onClick={() => leftArrow()}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-center pb-5">
                  <div
                    className={`h-24 w-24 md:w-32 md:h-32 border-2 border-second rounded-full`}
                  >
                    <img
                      className="rounded-full object-cover w-full h-full p-1"
                      src={testObject[currentPerson].image}
                      alt="current-person-image"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-zinc-300 w-full px-5 md:px-0 md:w-2/3 text-center font-extralight mt-5 text-md mb-5">
                    {testObject[currentPerson].text}
                  </p>
                  <h1 className="text-2xl lg:text-3xl pb-2 text-center text-transparent font-bold bg-clip-text bg-gradient-to-r from-second to-basic mb-5">
                    {testObject[currentPerson].name}
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-center space-x-4">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      currentPerson === 0
                        ? "bg-zinc-100 delay-75 transition-all"
                        : "border-2 lg:border-2 border-zinc-100 "
                    }`}
                  />
                  <div
                    className={`w-6 h-6 rounded-full ${
                      currentPerson === 1
                        ? "bg-zinc-100 delay-75 transition-all"
                        : "border-2 lg:border-2 border-zinc-100"
                    }`}
                  />
                  <div
                    className={`w-6 h-6 rounded-full ${
                      currentPerson === 2
                        ? "bg-zinc-100 delay-75 transition-all"
                        : "border-2 lg:border-2 border-zinc-100"
                    }`}
                  />
                  <div
                    className={`w-6 h-6 rounded-full ${
                      currentPerson === 3
                        ? "bg-zinc-100 delay-75 transition-all"
                        : "border-2 lg:border-2 border-zinc-100"
                    }`}
                  />
                </div>
              </div>
              <div className="flex flex-1 justify-end">
                <FontAwesomeIcon
                  className="text-basic text-2xl md:text-3xl cursor-pointer hover:text-[#74e7fc] hover:scale-105 transition-all z-20"
                  icon={faAngleRight}
                  onClick={() => rightArrow()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
