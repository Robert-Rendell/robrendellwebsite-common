import { WordOfTheDay } from "../../../models";
import { ErrorResponse } from "../../common";

export type AddWordOfTheDayResponse = WordOfTheDay | ErrorResponse;
