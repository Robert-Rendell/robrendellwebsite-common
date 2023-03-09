export type BattleshipsBoard = BattleshipBoardType[][];

export type BattleshipBoardStateTypes = "Hit" | "Miss" | "Unknown";
export type BattleshipBoardType = 1 | 0 | -1;
export const BattleshipCellStatus: Record<BattleshipBoardStateTypes, BattleshipBoardType> = {
    Hit: 1,
    Miss: 0,
    Unknown: -1,
  }

