export const Battleship = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2,
  "": -1,
};

export type BattleshipType = keyof typeof Battleship;

export type BattleshipStatus = "sunk" | "unsunk";
export type BattleshipStatuses = Record<
  Exclude<BattleshipType, "">,
  BattleshipStatus
>;
