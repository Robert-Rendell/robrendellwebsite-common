import { BattleshipsBoard } from "./battleships-board";
import { BattleshipsMove } from "./battleships-move";
import { BattleshipsUsername } from "./battleships-user";
import { BattleshipsGameState } from "./battleships-game-state";

export type Player1 = 0;
export type Player2 = 1;

export type BattleshipsGameId = string;
export type BattleshipsGame = {
  gameId: BattleshipsGameId;
  boardDimensions: [number, number];
  playerUsernames: [BattleshipsUsername, BattleshipsUsername];
  playerBoards: [BattleshipsBoard, BattleshipsBoard];
  playerMoves: [BattleshipsMove[], BattleshipsMove[]];
  state: BattleshipsGameState;
  turn: Player1 | Player2;
  winner?: BattleshipsUsername;
  startedPlayingAt?: string;
  finishedAt?: string;
};
