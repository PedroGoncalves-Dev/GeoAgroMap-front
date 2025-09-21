import { useQuery } from "@tanstack/react-query";
import { apiPeriods } from "../../api/filters/periods";

export const useGetFiltersPeriods = (idTable: string) => {
  return useQuery({
    queryKey: ["filters-periods", idTable],
    queryFn: async () => await apiPeriods(idTable),
    enabled: !!idTable,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
