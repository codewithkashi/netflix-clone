import React from "react";
import { isEmpty } from "lodash";
import { MovieCard } from "./";
interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

const MovieList = ({ data, title }: MovieListProps) => {
  if (isEmpty(data)) return null;
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8 ">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="flex flex-wrap  gap-8 justify-start ">
          {data?.map((e, index) => (
            <MovieCard key={index} data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
