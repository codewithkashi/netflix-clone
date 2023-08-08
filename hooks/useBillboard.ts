import useSWR from "swr";
import fetcher from "@utils/fetcher";

const useBillboard = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/randommovie",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading, mutate };
};

export default useBillboard;
