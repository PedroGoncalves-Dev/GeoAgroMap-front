export type KeySummarization = "periodo" | "nivelTerritorial";

export interface Periodicity {
  frequencia: string;
  inicio: number;
  fim: number;
}

export interface TerritorialLevel {
  Administrativo: string[];
  Especial: string[];
  IBGE: string[];
}

export interface Variable {
  id: number;
  nome: string;
  unidade: string;
  sumarizacao: KeySummarization[];
}

export interface ClassificationCategory {
  id: number;
  nome: string;
  unidade: string | null;
  nivel: number;
}

export interface ClassificationSummary {
  status: boolean;
  excecao: number[];
}

export interface Classification {
  id: number;
  nome: string;
  sumarizacao: ClassificationSummary;
  categorias: ClassificationCategory[];
}

export interface TableSidraDetail {
  id: number;
  nome: string;
  URL: string;
  pesquisa: string;
  assunto: string;
  periodicidade: Periodicity;
  nivelTerritorial: TerritorialLevel;
  variaveis: Variable[];
  classificacoes: Classification[];
}
