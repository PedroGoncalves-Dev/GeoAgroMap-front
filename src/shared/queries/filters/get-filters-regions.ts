import { useQuery } from "@tanstack/react-query";
import { apiRegions } from "../../api/filters/regions";

export const useGetFiltersRegions = () => {
  return useQuery({
    queryKey: ["filters-regions"],
    queryFn: async () => await apiRegions(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  });
};
