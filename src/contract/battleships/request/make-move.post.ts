import {
  BattleshipsGameId,
  BattleshipsMove,
  BattleshipsUsername,
} from "../../../models/battleships";

export type PostBattleshipsMakeMoveRequest = BattleshipsMove &
  BattleshipsGameId &
  BattleshipsUsername;
