"use client";
import React from "react";
import useMovie from "@hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
const Watch = ({ params }: { params: { id: string } }) => {
  const { data, mutate } = useMovie(params.id);
  const router = useRouter();
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-20 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.back()}
          className="text-white hover:cursor-pointer"
          size={40}
        />
        <p className="text-white text-xl md:text-3xl font-bold ">
          Watching: <span className="font-light">{data?.title}</span>
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        autoPlay
        controls
        className="h-full w-full"
      ></video>
    </div>
  );
};

export default Watch;
