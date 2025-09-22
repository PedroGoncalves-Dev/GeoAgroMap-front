import AlertToFilter from "@/components/alerts/alert-to-filter";
import Chart from "@/components/chart";
import Filters from "@/components/filters";
import SkeletonDashboard from "@/components/loading/skeleton/dashboard";
import Map from "@/components/map";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutationResult } from "@/shared/mutation/data-api/result";
import type { ApiIBGESeriesResponse } from "@/shared/types/data-api-result";
import type { GeoJSONResponse } from "@/shared/types/geo-json-response";
import { useState } from "react";

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState("grafico");
  const {
    mutate: mutateResult,
    data: result,
    isPending: isLoadingResult,
  } = useMutationResult();

  const resultData = result as unknown as {
    dataResult: ApiIBGESeriesResponse;
    dataKnitwear: GeoJSONResponse;
  };
  const resultDataQuery = resultData?.dataResult || [];

  const getSelectedYear = () => {
    if (resultDataQuery.length > 0 && resultDataQuery[0]?.data?.length > 0) {
      const firstDataPoint = resultDataQuery[0].data[0];
      const availableYears = Object.keys(firstDataPoint.values);
      return availableYears[0] || "2024";
    }
    return "2024";
  };

  const selectedYear = getSelectedYear();

  return (
    <div className="w-full max-h-[calc(100vh-4rem)] rounded-2xl p-5">
      <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between items-center border border-primary-100 rounded-2xl mb-5 p-4">
        <div className="flex items-center gap-2">
          <span>Visualização</span>
          <Select
            onValueChange={(value) => setSelectedView(value)}
            value={selectedView}
            disabled={!resultDataQuery.length}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione a visualização" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grafico">Grafico</SelectItem>
              <SelectItem value="mapa">Mapa</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Filters mutateResult={mutateResult} />
      </div>

      {!resultDataQuery.length && !isLoadingResult && <AlertToFilter />}
      {isLoadingResult && <SkeletonDashboard />}

      {resultDataQuery.length && !isLoadingResult && (
        <>
          {selectedView === "grafico" ? (
            <div className="flex items-center justify-center">
              <Chart
                resultDataQuery={resultDataQuery}
                selectedYear={selectedYear}
              />
            </div>
          ) : (
            <div className="relative z-0 border border-primary-100 rounded-2xl p-10">
              <Map
                geoJsonData={resultData?.dataKnitwear}
                chartData={resultDataQuery}
                selectedYear={selectedYear}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
