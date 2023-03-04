import { BattleshipsGame } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type GetBattleshipsGameResponse =
  | BattleshipsGame
  | BattleshipsErrorResponse;
