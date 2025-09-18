import { z } from "zod";
export const filterSchema = z.object({
  idTable: z.string(),
  products: z.array(z.number()),
  variables: z.array(z.number()),
});

export type FilterSchema = z.infer<typeof filterSchema>;
