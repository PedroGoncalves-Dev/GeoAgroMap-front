import type { FilterSchema } from "@/schema/filter-schema";

export interface PayloadFilterForResult extends FilterSchema {
  idClassification: number;
}
