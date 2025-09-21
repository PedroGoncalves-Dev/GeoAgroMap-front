import { z } from "zod";

export const filterSchema = z.object({
  idTable: z.string().min(1, "Selecione uma tabela"),
  variables: z
    .union([z.number().min(1), z.undefined()])
    .refine((val) => val !== undefined && val > 0, {
      message: "Selecione uma variável",
    }),
  products: z
    .union([z.number().min(1), z.undefined()])
    .refine((val) => val !== undefined && val > 0, {
      message: "Selecione um produto",
    }),
  periods: z
    .union([z.string().min(1), z.undefined()])
    .refine((val) => val !== undefined && val.length > 0, {
      message: "Selecione um ano",
    }),
  locality: z
    .union([z.enum(["N1", "N2", "N3"]), z.undefined()])
    .refine((val) => val !== undefined, {
      message: "Selecione uma localização",
    }),
});

export type FilterSchema = z.infer<typeof filterSchema>;
