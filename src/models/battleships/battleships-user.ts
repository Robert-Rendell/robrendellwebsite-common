import { BattleshipsBattle } from "./battleships-battle";

export type BattleshipsUsername = string;
export type BattleshipsUser = {
  username: BattleshipsUsername;
  battles: BattleshipsBattle[];
};
