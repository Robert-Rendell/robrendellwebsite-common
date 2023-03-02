import { BattleshipsBoard } from "./battleships-board";
import { BattleshipGameState } from "./battleships-game-state";
import { BattleshipsMove } from "./battleships-move";
import { BattleshipsUser } from "./battleships-user";

export type Player1 = 0;
export type Player2 = 1;

export type BattleshipsGame = {
  gameId: string;
  playerUsernames: [BattleshipsUser["username"], BattleshipsUser["username"]];
  playerBoards: [BattleshipsBoard, BattleshipsBoard];
  playerMoves: [BattleshipsMove[], BattleshipsMove[]];
  state: BattleshipGameState;
  turn: Player1 | Player2;
};
