import React from "react";

export const CTA = () => {
  return (
    <section id="contact">
      <div className="container p-10 lg:mt-5 xl:mt-24 2xl:mt-10">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-zinc-200 text-center font-bold text-3xl md:text-4xl mt-16 md:mt-24 lg:mt-10">
              Let Us Tell Your Story
            </h1>
            <p className="lg:w-2/3 text-zinc-400 font-extralight text-center text-md mt-10">
              Lörem ipsum svennefiera rinde huruvida pyna. Intrapp bioning,
              rekropp. Ultraktiga odat. Ronöst epigt label povirad ihet.
              Zlatanera trede dodade.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <button
              type="button"
              className="py-2 px-10 md:text-md rounded-sm bg-basic hover:bg-[#74e7fc] transition-all"
            >
              Contact Us
            </button>
            <p className="text-zinc-500 my-5 text-xs">No commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
};
