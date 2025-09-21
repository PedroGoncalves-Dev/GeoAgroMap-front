export type RegionId = 1 | 2 | 3 | 4 | 5;
export type RegionSigla = "N" | "NE" | "SE" | "S" | "CO";
export type RegionName =
  | "Norte"
  | "Nordeste"
  | "Sudeste"
  | "Sul"
  | "Centro-Oeste";

export interface Region {
  id: RegionId;
  sigla: RegionSigla;
  nome: RegionName;
}

export type UFSigla =
  | "RO"
  | "AC"
  | "AM"
  | "RR"
  | "PA"
  | "AP"
  | "TO"
  | "MA"
  | "PI"
  | "CE"
  | "RN"
  | "PB"
  | "PE"
  | "AL"
  | "SE"
  | "BA"
  | "MG"
  | "ES"
  | "RJ"
  | "SP"
  | "PR"
  | "SC"
  | "RS"
  | "MS"
  | "MT"
  | "GO"
  | "DF";

export interface UF {
  id: number;
  sigla: UFSigla;
  nome: string;
  regiao: Region;
}

export type UFsResponse = UF[];
