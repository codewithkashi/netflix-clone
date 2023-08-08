import useSWR from "swr";
import fetcher from "@utils/fetcher";

const useMovieList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading, mutate };
};

export default useMovieList;
