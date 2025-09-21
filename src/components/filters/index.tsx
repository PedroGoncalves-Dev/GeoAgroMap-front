import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { FilterIcon } from "lucide-react";
import { useGetFiltersPeriods } from "@/shared/queries/filters/get-filters-periods";
import { useForm } from "react-hook-form";
import { filterSchema, type FilterSchema } from "@/schema/filter-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetFiltersMetadados } from "@/shared/queries/filters/get-filters-metadados";
import FormFilters from "./form";
import { useGetFiltersRegions } from "@/shared/queries/filters/get-filters-regions";
import type { PayloadFilterForResult } from "@/shared/types/payload-filter-for-result";

interface filtersProps {
  mutateResult: (data: PayloadFilterForResult) => void;
}

const Filters = ({ mutateResult }: filtersProps) => {
  const form = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      idTable: "",
      variables: undefined,
      products: undefined,
      periods: undefined,
      locality: undefined,
    } as Partial<FilterSchema>,
  });

  const idTable = form.watch("idTable");
  const { data: periods, isLoading: isLoadingPeriods } =
    useGetFiltersPeriods(idTable);

  const { data: metadados, isLoading: isLoadingMetadados } =
    useGetFiltersMetadados(idTable);

  const products = metadados?.classificacoes[0].categorias;
  const variables = metadados?.variaveis;
  const idClassification = metadados?.classificacoes[0].id || 0;
  const buttonDisabled = !idTable || isLoadingMetadados || isLoadingPeriods;

  const { data: regions, isLoading: isLoadingRegions } = useGetFiltersRegions();

  const handleClear = () => {
    form.reset();
  };

  const tranformLocality = (locality: "N1" | "N2" | "N3" | undefined) => {
    if (locality === "N1") return "";
    if (locality === "N2") return "regiao";
    if (locality === "N3") return "UF";
    return "";
  };

  const onSubmit = async (data: FilterSchema) => {
    const { locality } = data;
    const intraRegion = tranformLocality(locality);
    const payload = { ...data, idClassification, intraRegion };

    return mutateResult(payload);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          Filtros e Agrupamentos <FilterIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center py-5 text-lg">
            Filtros e Agrupamentos
          </SheetTitle>
          <SheetDescription>
            Selecione os filtros e agrupamentos que deseja aplicar a sua
            pesquisa.
          </SheetDescription>
        </SheetHeader>
        <FormFilters
          form={form}
          onSubmit={onSubmit}
          idTable={idTable}
          isLoadingMetadados={isLoadingMetadados}
          isLoadingPeriods={isLoadingPeriods}
          variables={variables || []}
          products={products || []}
          periods={periods || []}
          regions={regions || []}
          isLoadingRegions={isLoadingRegions}
          buttonDisabled={buttonDisabled}
          handleClear={handleClear}
        />
      </SheetContent>
    </Sheet>
  );
};

export default Filters;
