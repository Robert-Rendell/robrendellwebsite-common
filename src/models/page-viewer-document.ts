import { IPLocation } from "./ip-location";

export type PageUrl = string;

export type PageView = {
  ipAddress: string;
  ipLocation?: IPLocation;
  dateTime: string;
};

export type PageViewerDocument = {
  pageUrl: PageUrl;
  views: PageView[];
  total: number;
};
