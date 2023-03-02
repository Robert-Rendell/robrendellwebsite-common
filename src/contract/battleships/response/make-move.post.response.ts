import { BattleshipsGame } from "../../../models";
import { BattleshipsErrorResponse } from "../errors";

export type PostBattleshipsMakeMoveResponse =
  | BattleshipsGame
  | BattleshipsErrorResponse;
