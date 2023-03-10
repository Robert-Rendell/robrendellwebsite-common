import { BattleshipType } from "./battleship-type";
import { BattleshipsGame } from "./battleships-game";
import { BattleshipsUser } from "./battleships-user";

export type BattleshipsConfigurationBoard = BattleshipType[][];

export type BattleshipsStartConfiguration = {
  configuration: BattleshipsConfigurationBoard;
} & Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
