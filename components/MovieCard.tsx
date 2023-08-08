"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FavouriteButton, InfoModel } from "./";
import { useRouter } from "next/navigation";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface MovieCardProps {
  data: Record<string, any>;
}
const MovieCard = ({ data }: MovieCardProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="group bg-zinc-900 col-span-1 relative h-[220px] w-[280px] md:h-[300px] md:w-[400px]">
      <Image
        src={data?.thumbnailUrl}
        alt="thumbnail"
        className="cursor-pointer object-cover transition-all duration-75 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-3/4"
        width={300}
        height={200}
      />
      <div className="opacity-0 absolute top-0 transition-all duration-200 z-10 delay-100 w-full scale-0 group-hover:scale-110 group-hover:translate-x-[20px] group-hover:opacity-100">
        <Image
          src={data?.thumbnailUrl}
          alt="thumbnail"
          className="cursor-pointer object-cover shadow-xl rounded-md  w-full h-3/4"
          width={300}
          height={200}
        />
        <div className="z-10 bg-zinc-900 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div className="cursor-pointer w-6 h-6 lg:h-10 lg:w-10 rounded-full flex justify-center items-center transition-all hover:bg-neutral-300">
              <BsFillPlayFill
                onClick={() => router.push(`/watch/${data?.id}`)}
                size={30}
                className="rounded-full text-white hover:text-black bg-zinc-800 hover:bg-white h-6 w-6 lg:w-10 lg:h-10 "
              />
            </div>
            <FavouriteButton id={data?.id} />
            <AiOutlineInfoCircle
              onClick={() => setOpen(true)}
              size={30}
              className="rounded-full text-white hover:text-black bg-zinc-800 hover:bg-white h-6 w-6 lg:w-10 lg:h-10 "
            />
          </div>
          <div className="mt-4">
            <p className="text-green-400 font-semibold ">
              New <span className="text-white"> 2023</span>
            </p>
            <div className="flex flex-row mt-2 gap-2 items-center">
              <p className="text-white text-[10px] lg:text-sm">
                {data?.duration}
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 items-center">
              <p className="text-white text-[10px] lg:text-sm">{data?.genre}</p>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed w-screen h-screen z-50 bg-transparents p-40 top-0 flex justify-center items-center">
          <InfoModel data={data} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
