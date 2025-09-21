import { apiResult } from "@/shared/api/data-api/result";
import type { PayloadFilterForResult } from "@/shared/types/payload-filter-for-result";
import { useMutation } from "@tanstack/react-query";

export const useMutationResult = () => {
  return useMutation({
    mutationFn: (data: PayloadFilterForResult) => apiResult(data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
