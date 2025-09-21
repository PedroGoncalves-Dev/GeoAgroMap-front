import { apiUfs } from "@/shared/api/filters/ufs";
import { useQuery } from "@tanstack/react-query";

export const useGetFiltersUfs = () => {
  return useQuery({
    queryKey: ["filters-ufs"],
    queryFn: async () => await apiUfs(),
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  });
};
