import { BattleshipsGame } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type PostBattleshipsJoinGameResponse = BattleshipsGame | BattleshipsErrorResponse;
