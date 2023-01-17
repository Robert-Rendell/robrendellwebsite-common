import { InterestingDateInHistory } from "../../../models";

export type AddDateInHistoryRequest = InterestingDateInHistory & {
    insertionIndex?: number;
}