import { BattleshipsUsername } from "./battleships-user";

export type BattleshipsBattler = BattleshipsUsername & {
  numberOfMoves: number;
  shipsRemaining: number;
};
export type BattleshipsBattle = {
  winner: BattleshipsBattler;
  loser: BattleshipsBattler;
  elapsed: string;
};
