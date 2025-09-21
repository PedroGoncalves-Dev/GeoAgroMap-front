export type Position = [number, number];

export type PointCoordinates = Position;
export type LineStringCoordinates = Position[];
export type PolygonCoordinates = Position[][];
export type MultiPolygonCoordinates = Position[][][];

export interface Point {
  type: "Point";
  coordinates: PointCoordinates;
}

export interface LineString {
  type: "LineString";
  coordinates: LineStringCoordinates;
}

export interface Polygon {
  type: "Polygon";
  coordinates: PolygonCoordinates;
}

export interface MultiPolygon {
  type: "MultiPolygon";
  coordinates: MultiPolygonCoordinates;
}

export type Geometry = Point | LineString | Polygon | MultiPolygon;

export interface Properties {
  [key: string]: any;
}

export interface Feature {
  type: "Feature";
  geometry: Geometry;
  properties?: Properties | null;
}

export interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}

export type GeoJSONResponse = FeatureCollection;
