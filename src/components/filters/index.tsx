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
import { useGetFiltersPeriods } from "@/shared/queries/get-filters-periods";
import { useForm } from "react-hook-form";
import { filterSchema, type FilterSchema } from "@/schema/filter-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useGetFiltersMetadados } from "@/shared/queries/get-filters-metadados";
import SelectTable from "./select-table";
import FormFilters from "./form";

const Filters = () => {
  const form = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      idTable: "",
      products: [],
    },
  });

  const idTable = form.watch("idTable");
  const { data: periods, isLoading: isLoadingPeriods } =
    useGetFiltersPeriods(idTable);

  const { data: metadados, isLoading: isLoadingMetadados } =
    useGetFiltersMetadados(idTable);

  const products = metadados?.classificacoes[0].categorias;
  const variables = metadados?.variaveis;
  const buttonDisabled = !idTable || isLoadingMetadados || isLoadingPeriods;

  const handleClear = () => {
    form.reset();
  };

  const onSubmit = (data: FilterSchema) => {
    console.log(data);
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
          buttonDisabled={buttonDisabled}
          handleClear={handleClear}
        />
      </SheetContent>
    </Sheet>
  );
};

export default Filters;
