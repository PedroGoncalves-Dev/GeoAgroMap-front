import { SkeletonFilters } from "../loading/skeleton/skeleton-filters";
import ErrorAlert from "../alerts/filters/error-alert";
import SelectTableAlert from "../alerts/filters/select-table-alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
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
import type { Region } from "@/shared/types/filters/ufs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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
  regions: Region[];
  isLoadingRegions: boolean;
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
  const locality = [
    {
      id: 1,
      name: "Brasil",
      value: "N1",
    },
    {
      id: 2,
      name: "Grande região [5]",
      value: "N2",
    },
    {
      id: 3,
      name: "Unidade da Federação [28]",
      value: "N3",
    },
  ];

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

              {!isLoadingMetadados && variables && (
                <FormField
                  control={form.control}
                  name="variables"
                  render={({ field }) => (
                    <FormItem>
                      <FormMessage />
                      <FormControl>
                        <RadioGroup
                          value={field.value?.toString() || ""}
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          className="flex flex-col gap-2"
                        >
                          {variables.map((variable) => (
                            <div
                              key={variable.id}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                className="cursor-pointer"
                                value={variable.id.toString()}
                                id={variable.id.toString()}
                              />
                              <Label
                                htmlFor={variable.id.toString()}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {variable.nome}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
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
              {!isLoadingMetadados && products && (
                <FormField
                  control={form.control}
                  name="products"
                  render={({ field }) => (
                    <FormItem>
                      <FormMessage />
                      <FormControl>
                        <RadioGroup
                          value={field.value?.toString() || ""}
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          className="flex flex-col gap-2"
                        >
                          {products.map((product) => (
                            <div
                              key={product.id}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                className="cursor-pointer"
                                value={product.id.toString()}
                                id={product.id.toString()}
                              />
                              <Label
                                htmlFor={product.id.toString()}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {product.nome}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
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

              {!isLoadingPeriods && periods && (
                <FormField
                  control={form.control}
                  name="periods"
                  render={({ field }) => (
                    <FormItem>
                      <FormMessage />
                      <FormControl>
                        <RadioGroup
                          value={field.value || ""}
                          onValueChange={field.onChange}
                          className="flex flex-col gap-2"
                        >
                          {periods.map((period) => (
                            <div
                              key={period.id}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                className="cursor-pointer"
                                value={period.id.toString()}
                                id={period.id.toString()}
                              />
                              <Label
                                htmlFor={period.id.toString()}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {period.literals}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </div>
          </div>

          <div className="border border-primary-100 rounded-md p-2 h-auto">
            <h3 className="font-bold">Localização*</h3>

            <div className="flex flex-col gap-2 mt-2 pl-2.5 overflow-y-auto max-h-25">
              <FormField
                control={form.control}
                name="locality"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <RadioGroup
                        defaultValue={field.value || ""}
                        onValueChange={field.onChange}
                        className="flex flex-col gap-2"
                      >
                        {locality.map((location) => (
                          <div
                            key={location.id}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={location.value}
                              id={location.id.toString()}
                            />
                            <Label
                              htmlFor={location.id.toString()}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {location.name}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
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
