import { httpClient } from "@/shared/services/http-client";
import type { PeriodsResponse } from "@/shared/types/filters/periods";

export const apiPeriods = async (idTable: string): Promise<PeriodsResponse> => {
  const { data } = await httpClient.get(`/filters/periods/${idTable}`);
  return data;
};
