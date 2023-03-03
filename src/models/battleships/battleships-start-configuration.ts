import { BattleshipsBoard } from "./battleships-board";
import { BattleshipsGame } from "./battleships-game";
import { BattleshipsUser } from "./battleships-user";

export type BattleshipsStartConfiguration = {
  configuration: BattleshipsBoard;
} & Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
