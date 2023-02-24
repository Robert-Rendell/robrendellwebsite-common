import { PageUrl, PageView } from "../../../models";

export type PageViewRequest = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  pageUrl: PageUrl;
} & PageView;
