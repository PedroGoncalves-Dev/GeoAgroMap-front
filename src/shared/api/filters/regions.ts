import { httpClient } from "@/shared/services/http-client";
import type { Region } from "@/shared/types/filters/ufs";

export const apiRegions = async (): Promise<Region[]> => {
  const { data } = await httpClient.get<Region[]>("/filters/regions");
  return data;
};
