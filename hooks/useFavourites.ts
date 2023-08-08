import useSWR from "swr";
import fetcher from "@utils/fetcher";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/favourite", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading, mutate };
};

export default useFavourites;
