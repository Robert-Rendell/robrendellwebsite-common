export type BattleshipsBoard = BattleshipsBoardType[][];

export type BattleshipsBoardStateTypes = "Hit" | "Miss" | "Unknown";
export type BattleshipsBoardType = 1 | 0 | -1;
export const BattleshipsBoardState: {
  Hit: BattleshipsBoardType;
  Miss: BattleshipsBoardType;
  Unknown: BattleshipsBoardType;
} = {
  Hit: 1,
  Miss: 0,
  Unknown: -1,
};
