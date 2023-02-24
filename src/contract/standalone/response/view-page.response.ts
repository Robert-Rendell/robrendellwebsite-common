import { PageViewerDocument } from "../../../models";

export type ViewPageResponse = Pick<PageViewerDocument, "pageUrl" | "total">;
