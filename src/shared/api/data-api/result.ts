import { httpClient } from "@/shared/services/http-client";
import type { PayloadFilterForResult } from "@/shared/types/payload-filter-for-result";

export const apiResult = async (data: PayloadFilterForResult) => {
  const { data: result } = await httpClient.post("/data-api", data);
  return result;
};
