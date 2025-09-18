import { useQuery } from "@tanstack/react-query";
import { apiMetadados } from "../api/filters/metadados";

export const useGetFiltersMetadados = (idTable: string) => {
  return useQuery({
    queryKey: ["filters-metadados", idTable],
    queryFn: async () => await apiMetadados(idTable),
    enabled: !!idTable,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
