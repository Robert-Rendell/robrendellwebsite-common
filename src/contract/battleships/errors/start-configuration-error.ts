import { BattleshipsErrorResponse } from "./game-state.error";

export const BattleshipsStartConfigurationNotFound = (
  gameId: string
): BattleshipsErrorResponse => ({
  errorMessage: `Battleships start configuration not found: ${gameId}`,
});
