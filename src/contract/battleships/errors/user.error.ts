import { BattleshipsErrorResponse } from "./game-state.error";

export const BattleshipsUserNotFound = (
  gameId: string
): BattleshipsErrorResponse => ({
  errorMessage: `Battleships user not found: ${gameId}`,
});
