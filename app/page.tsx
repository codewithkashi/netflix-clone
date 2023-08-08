"use client";
import React, { useEffect } from "react";
import { Navbar, Billboard, MovieList } from "@components";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import useMovieList from "@hooks/useMoviesList";
import useFavourites from "@hooks/useFavourites";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const user = async () => {
      const data = await getSession();
      if (!data?.user?.email) router.push("/account");
    };
    user();
  }, []);
  const { data: movies } = useMovieList();
  const { data: favourites } = useFavourites();
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favourites?.favoritedMovies} />
      </div>
    </>
  );
};

export default Home;
