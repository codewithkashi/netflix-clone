import useSWR from "swr";
import fetcher from "@utils/fetcher";

const useMovie = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/watch/${id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading, mutate };
};

export default useMovie;
