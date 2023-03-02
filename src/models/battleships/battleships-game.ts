import { BattleshipsBoard } from "./battleships-board";
import { BattleshipGameState } from "./battleships-game-state";
import { BattleshipsMove } from "./battleships-move";
import { BattleshipsUsername } from "./battleships-user";

export type Player1 = 0;
export type Player2 = 1;

export type BattleshipsGameId = string;
export type BattleshipsGame = {
  gameId: BattleshipsGameId;
  boardDimensions: [number, number];
  playerUsernames: [BattleshipsUsername, BattleshipsUsername];
  playerBoards: [BattleshipsBoard, BattleshipsBoard];
  playerMoves: [BattleshipsMove[], BattleshipsMove[]];
  state: BattleshipGameState;
  turn: Player1 | Player2;
};
