import useSWR from "swr";
import fetcher from "@utils/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/profile", fetcher);
  return { data, error, isLoading, mutate };
};

export default useCurrentUser;
