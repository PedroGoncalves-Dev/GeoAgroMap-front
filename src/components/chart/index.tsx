import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { TrendingUp } from "lucide-react";
import type { SeriesItem } from "@/shared/types/data-api-result";

const Chart = ({
  resultDataQuery,
  selectedYear,
}: {
  resultDataQuery: SeriesItem[];
  selectedYear: string;
}) => {
  const getChartDataForItem = (item: SeriesItem) => {
    return item.data.map((dataPoint) => {
      return {
        location: dataPoint.location.name,
        valor: dataPoint.values[selectedYear],
      };
    });
  };

  // Calcula a largura mínima baseada no número de dados
  const getMinWidth = (dataLength: number) => {
    return Math.max(dataLength * 80, 400); // Mínimo 80px por barra, mínimo absoluto 400px
  };
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };
  return (
    <>
      {resultDataQuery &&
        resultDataQuery.length > 0 &&
        resultDataQuery.map((item) => {
          const chartData = getChartDataForItem(item);

          return (
            <Card
              key={`${item.product.id}-${item.variable.id}`}
              className="w-[80%]"
            >
              <CardHeader>
                <CardTitle>{item.product.name}</CardTitle>
                <CardDescription>
                  {item.variable.name} ({item.variable.unit}) - Ano:{" "}
                  {selectedYear}
                </CardDescription>
              </CardHeader>

              <CardContent className="overflow-x-auto">
                <ChartContainer config={chartConfig} className="min-h-[300px]">
                  <BarChart
                    data={chartData}
                    width={getMinWidth(chartData.length)}
                    height={300}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="location"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      interval={0}
                      tickFormatter={(value) => {
                        // Se o nome for muito longo, corta e adiciona "..."
                        return value.length > 12
                          ? `${value.slice(0, 12)}...`
                          : value;
                      }}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          hideLabel={false}
                          labelFormatter={(value) => `Local: ${value}`}
                          formatter={(value) => [value, item.variable.unit]}
                        />
                      }
                    />
                    <Bar
                      dataKey="valor"
                      fill="var(--color-desktop)"
                      radius={8}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                  Dados de {selectedYear} <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                  {item.variable.unit} por região
                </div>
              </CardFooter>
            </Card>
          );
        })}
    </>
  );
};

export default Chart;
