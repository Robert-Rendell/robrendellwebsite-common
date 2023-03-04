import { BattleshipsGame } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type PostBattleshipsCreateGameResponse = BattleshipsGame | BattleshipsErrorResponse;
