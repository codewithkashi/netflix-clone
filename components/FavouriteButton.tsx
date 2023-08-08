"use client";
import React, { useMemo } from "react";
import axios from "axios";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import useFavourites from "@hooks/useFavourites";
import useCurrentUser from "@hooks/useCurrentUser";
const FavouriteButton = ({ id: movieId }: { id: string }) => {
  const { mutate: mutateFavorites } = useFavourites();
  const { data: user, mutate } = useCurrentUser();
  const isFavourite = useMemo(() => {
    const list = user?.favoriteIds || [];
    return list.includes(movieId);
  }, [user, movieId]);
  const toggleFavorite = async () => {
    try {
      let response;
      if (isFavourite) {
        response = await axios.delete("/api/favourite", { data: { movieId } });
      } else {
        response = await axios.post("/api/favourite", { movieId });
      }

      if (response.status == 200) {
        mutate({
          favouriteIds: response?.data,
        });
        mutateFavorites();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorite}
      className="cursor-pointer group/item h-6 w-6 lg:w-10 lg:h-10 rounded-full flex justify-center items-center transition-all bg-zinc-800 hover:bg-white"
    >
      <Icon size={30} className="text-white hover:text-black" />
    </div>
  );
};

export default FavouriteButton;
