import { SkeletonFilters } from "../loading/skeleton/skeleton-filters";
import ErrorAlert from "../alerts/filters/error-alert";
import SelectTableAlert from "../alerts/filters/select-table-alert";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import SelectTable from "./select-table";
import type { UseFormReturn } from "react-hook-form";
import type { FilterSchema } from "@/schema/filter-schema";
import type {
  ClassificationCategory,
  Variable,
} from "@/shared/types/filters/metadados";
import type { PeriodsResponse } from "@/shared/types/filters/periods";
import { Button } from "../ui/button";

interface FormFiltersProps {
  form: UseFormReturn<FilterSchema>;
  onSubmit: (data: FilterSchema) => void;
  idTable: string;
  isLoadingMetadados: boolean;
  isLoadingPeriods: boolean;
  variables: Variable[];
  products: ClassificationCategory[];
  periods: PeriodsResponse;
  buttonDisabled: boolean;
  handleClear: () => void;
}
const FormFilters = ({
  form,
  onSubmit,
  idTable,
  isLoadingMetadados,
  isLoadingPeriods,
  variables,
  products,
  periods,
  buttonDisabled,
  handleClear,
}: FormFiltersProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 px-3">
          <SelectTable form={form} />

          <div className="border border-primary-100 rounded-md h-auto p-2 max-h-32">
            <h3 className="font-bold">Variáveis*</h3>
            {!idTable && <SelectTableAlert />}
            <div className="flex flex-col gap-2 mt-2 pl-2.5 overflow-y-auto max-h-20">
              {isLoadingMetadados && <SkeletonFilters />}

              {!isLoadingMetadados &&
                variables &&
                variables?.map((variable) => (
                  <FormField
                    key={variable.id}
                    control={form.control}
                    name="variables"
                    render={({ field }) => {
                      const currentValue = field.value || [];
                      return (
                        <FormItem className="flex flex-row items-center gap-2">
                          <FormControl>
                            <Checkbox
                              id={variable.id.toString()}
                              className="cursor-pointer"
                              checked={currentValue.includes(variable.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([
                                    ...currentValue,
                                    variable.id,
                                  ]);
                                } else {
                                  field.onChange(
                                    currentValue.filter(
                                      (value) => value !== variable.id
                                    )
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <Label
                            htmlFor={variable.id.toString()}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {variable.nome}
                          </Label>
                        </FormItem>
                      );
                    }}
                  />
                ))}
            </div>
          </div>
          <div className="border border-primary-100 rounded-md h-auto p-2 max-h-32">
            <h3 className=" font-bold">
              {idTable === "1612" && "Produtos das lavouras temporárias*"}
              {idTable === "1613" && "Produtos das lavouras permanentes*"}
              {idTable === "5457" && "Produtos das lavouras consolidadas*"}
              {!idTable && "Produtos:"}
            </h3>
            {!idTable && <SelectTableAlert />}
            <div className="flex flex-col gap-2 mt-2 pl-2.5 overflow-y-auto max-h-20">
              {isLoadingMetadados && <SkeletonFilters />}
              {!isLoadingMetadados &&
                products &&
                products?.map((product) => (
                  <FormField
                    key={product.id}
                    control={form.control}
                    name="products"
                    render={({ field }) => {
                      const currentValue = field.value || [];
                      return (
                        <FormItem className="flex flex-row items-center gap-2">
                          <FormControl>
                            <Checkbox
                              id={product.id.toString()}
                              className="cursor-pointer"
                              checked={currentValue.includes(product.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...currentValue, product.id]);
                                } else {
                                  field.onChange(
                                    currentValue.filter(
                                      (value) => value !== product.id
                                    )
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <Label
                            htmlFor={product.id.toString()}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {product.nome}
                          </Label>
                        </FormItem>
                      );
                    }}
                  />
                ))}
            </div>
          </div>
          <div className="border border-primary-100 rounded-md p-2 h-auto">
            <h3 className="font-bold">Ano*</h3>
            {!idTable && <SelectTableAlert />}
            <div className="flex flex-col gap-2 mt-2 pl-2.5 overflow-y-auto max-h-25">
              {isLoadingPeriods && <SkeletonFilters />}
              {!isLoadingPeriods && !periods && idTable && (
                <ErrorAlert
                  title="Falha ao carregar os períodos"
                  description="Falha ao carregar os períodos para a tabela selecionada."
                />
              )}

              {!isLoadingPeriods &&
                periods &&
                periods?.map((period) => (
                  <div className="flex items-center gap-2" key={period.id}>
                    <Checkbox id={period.id} className="cursor-pointer" />
                    <Label
                      htmlFor={period.id}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {period.literals[0]}
                    </Label>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-around gap-3 mt-5 px-3">
          <Button
            variant={"outline"}
            className="flex-1"
            disabled={buttonDisabled}
            onClick={handleClear}
          >
            Limpar
          </Button>
          <Button className="flex-1" disabled={buttonDisabled} type="submit">
            Aplicar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormFilters;
