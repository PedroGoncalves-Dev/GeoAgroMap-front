import { httpClient } from "@/shared/services/http-client";
import type { UFsResponse } from "@/shared/types/filters/ufs";

export const apiUfs = async (): Promise<UFsResponse> => {
  const { data } = await httpClient.get("/filters/ufs");

  return data;
};
