export type LatLng = [number, number];

export type IPLocation = {
  range: [number, number];
  country: string;
  region: string;
  eu: string;
  timezone: string;
  city: string;
  ll: LatLng;
  metro: number;
  area: number;
};
