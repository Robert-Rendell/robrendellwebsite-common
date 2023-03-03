import {
  BattleshipsGame,
  BattleshipsMove,
  BattleshipsUser,
} from "../../../models/battleships";

export type PostBattleshipsMakeMoveRequest = {
  move: BattleshipsMove;
} & Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
