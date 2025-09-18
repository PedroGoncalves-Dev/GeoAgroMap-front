import type { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { FilterSchema } from "@/schema/filter-schema";

interface SelectTableProps {
  form: UseFormReturn<FilterSchema>;
}

const SelectTable = ({ form }: SelectTableProps) => {
  return (
    <FormField
      control={form.control}
      name="idTable"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tabela*</FormLabel>
          <FormControl>
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="selecione" />
              </SelectTrigger>
              <SelectContent>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectItem value="1612">1612</SelectItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lavouras temporárias</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectItem value="1613">1613</SelectItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lavouras permanentes</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={500}>
                  <TooltipTrigger asChild>
                    <SelectItem value="5457">5457</SelectItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lavouras consolidadas</p>
                  </TooltipContent>
                </Tooltip>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default SelectTable;
