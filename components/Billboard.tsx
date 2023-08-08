import React from "react";
import useBillboard from "@hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PlayButton } from "./";
const Billiboard = () => {
  const { data: movie } = useBillboard();
  return (
    <div className="relative h-[56vw] w-[100vw]">
      <video
        autoPlay
        muted
        className="h-full w-full object-cover brightness-[60%]"
        loop
        src={movie?.videoUrl}
        poster={movie?.thumbnailUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 ">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {movie?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[(0%] md:w-[90%] lg:w-[90%] drop-shadow-xl">
          {movie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={movie?.id} />
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition-all hover:cursor-pointer">
            <AiOutlineInfoCircle className="text-white mr-1" size={25} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billiboard;
