import { httpClient } from "@/shared/services/http-client";
import type { TableSidraDetail } from "@/shared/types/filters/metadados";

export const apiMetadados = async (
  idTable: string
): Promise<TableSidraDetail> => {
  const { data } = await httpClient.get(`/filters/metadados/${idTable}`);

  return data;
};
