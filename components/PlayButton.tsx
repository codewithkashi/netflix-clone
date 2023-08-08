import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
const PlayButton = ({ movieId }: { movieId: string }) => {
  const router = useRouter();
  return (
    <button
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition-all"
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill size={25} className="mr-1" /> Play
    </button>
  );
};

export default PlayButton;
