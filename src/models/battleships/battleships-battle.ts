import { BattleshipsUser } from "./battleships-user";

export type BattleshipsBattler = Pick<BattleshipsUser, "username"> & {
  numberOfMoves: number;
  shipsRemaining: number;
};
export type BattleshipsBattle = {
  winner: BattleshipsBattler;
  loser: BattleshipsBattler;
  elapsed: string;
};
