// Níveis territoriais comuns no IBGE (extensível conforme necessidade)
export type TerritorialLevelId = "N1" | "N2" | "N3";

export interface TerritorialLevel {
  id: TerritorialLevelId;
  name: string;
}

export interface Location {
  id: string;
  name: string;
  level: TerritorialLevel;
}

// Mapa ano -> valor (valores vêm como string, podendo ser "..." ou números em string)
export type YearValueMap = Record<string, string>;

export interface DataPoint {
  location: Location;
  values: YearValueMap;
}

export interface VariableInfo {
  id: string;
  name: string;
  unit: string;
}

export interface ProductInfo {
  id: string;
  name: string;
}

export interface SeriesItem {
  variable: VariableInfo;
  product: ProductInfo;
  data: DataPoint[];
}

export type ApiIBGESeriesResponse = SeriesItem[];
