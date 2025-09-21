import { apiResult } from "@/shared/api/data-api/result";
import type { PayloadFilterForResult } from "@/shared/types/payload-filter-for-result";
import { useQuery } from "@tanstack/react-query";

export const useGetResult = (data: PayloadFilterForResult) => {
  return useQuery({
    queryKey: ["result", data],
    queryFn: async () => await apiResult(data),
    enabled: !!data,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  });
};
