import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { GeoJSONResponse } from "@/shared/types/geo-json-response";
import type { SeriesItem } from "@/shared/types/data-api-result";
import { useMemo } from "react";

interface MapProps {
  geoJsonData?: GeoJSONResponse;
  chartData?: SeriesItem[];
  selectedYear?: string;
}

const Map = ({ geoJsonData, chartData, selectedYear = "2024" }: MapProps) => {
  const position = [-14.235, -51.9253] as LatLngTuple;

  const normalizeRegionName = (name: string): string => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  const codeToRegionMapping: Record<string, string> = {
    "1": "Norte",
    "2": "Nordeste",
    "3": "Sudeste",
    "4": "Sul",
    "5": "Centro-Oeste",

    "11": "Rondônia",
    "12": "Acre",
    "13": "Amazonas",
    "14": "Roraima",
    "15": "Pará",
    "16": "Amapá",
    "17": "Tocantins",
    "21": "Maranhão",
    "22": "Piauí",
    "23": "Ceará",
    "24": "Rio Grande do Norte",
    "25": "Paraíba",
    "26": "Pernambuco",
    "27": "Alagoas",
    "28": "Sergipe",
    "29": "Bahia",
    "31": "Minas Gerais",
    "32": "Espírito Santo",
    "33": "Rio de Janeiro",
    "35": "São Paulo",
    "41": "Paraná",
    "42": "Santa Catarina",
    "43": "Rio Grande do Sul",
    "50": "Mato Grosso do Sul",
    "51": "Mato Grosso",
    "52": "Goiás",
    "53": "Distrito Federal",
  };

  const regionValues = useMemo(() => {
    if (!chartData || chartData.length === 0) return {};

    const values: Record<string, number> = {};

    chartData.forEach((item) => {
      item.data.forEach((dataPoint) => {
        const value = dataPoint.values[selectedYear];
        const numericValue = value === "-" ? 0 : Number(value) || 0;

        const regionName = dataPoint.location.name;
        values[regionName] = numericValue;
        values[normalizeRegionName(regionName)] = numericValue;

        console.log(
          "Região do chart:",
          regionName,
          "Valor:",
          numericValue,
          "Ano:",
          selectedYear
        );
      });
    });

    console.log("Region values final:", values);
    console.log("Selected year:", selectedYear);
    console.log("Chart data structure:", chartData);
    return values;
  }, [chartData, selectedYear]);

  const getFeatureStyle = (feature: any) => {
    const areaCode = feature.properties?.codarea || "";
    const regionFromCode = codeToRegionMapping[areaCode] || "";

    let value = 0;

    if (regionFromCode) {
      value = regionValues[regionFromCode] || 0;
    }

    if (value === 0 && regionFromCode) {
      value = regionValues[normalizeRegionName(regionFromCode)] || 0;
    }

    console.log(
      "Código da área:",
      areaCode,
      "Região mapeada:",
      regionFromCode,
      "Valor encontrado:",
      value,
      "Propriedades:",
      feature.properties
    );

    const maxValue = Math.max(...Object.values(regionValues));
    const intensity = maxValue > 0 ? value / maxValue : 0;

    return {
      fillColor:
        value > 0 ? `rgba(37, 99, 235, ${0.3 + intensity * 0.7})` : "#e5e7eb",
      weight: 2,
      opacity: 1,
      color: "#374151",
      fillOpacity: 0.7,
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const areaCode = feature.properties?.codarea || "";
    const regionName = codeToRegionMapping[areaCode] || "Região";

    let value = 0;

    if (regionName !== "Região") {
      value = regionValues[regionName] || 0;
    }

    if (value === 0 && regionName !== "Região") {
      value = regionValues[normalizeRegionName(regionName)] || 0;
    }

    const productInfo = chartData?.[0]?.product?.name || "Produto";
    const variableInfo = chartData?.[0]?.variable || {
      name: "Variável",
      unit: "Unidade",
    };

    const popupContent = `
      <div style="font-family: sans-serif;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${regionName}</h3>
        <p style="margin: 4px 0;"><strong>Produto:</strong> ${productInfo}</p>
        <p style="margin: 4px 0;"><strong>${
          variableInfo.name
        }:</strong> ${value.toLocaleString()} ${variableInfo.unit}</p>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #666;">Ano: ${selectedYear}</p>
      </div>
    `;

    layer.bindPopup(popupContent);

    layer.on({
      mouseover: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          color: "#1d4ed8",
          fillOpacity: 0.9,
        });
      },
      mouseout: (e: any) => {
        const layer = e.target;
        layer.setStyle(getFeatureStyle(feature));
      },
    });
  };

  return (
    <MapContainer
      center={position}
      zoom={4}
      style={{ height: "500px", width: "100%", zIndex: 1 }}
      className="relative z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          style={getFeatureStyle}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  );
};

export default Map;
