import { BattleshipsGame } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type PostBattleshipsMakeMoveResponse =
  | BattleshipsGame
  | BattleshipsErrorResponse;
