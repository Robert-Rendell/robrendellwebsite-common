import {
  BattleshipsGame,
  BattleshipsMove,
  BattleshipsUser,
} from "../../../models/battleships";

export type PostBattleshipsMakeMoveRequest = BattleshipsMove &
  Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
