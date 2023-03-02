import { BattleshipsMove } from "../../../models/battleships/battleships-move";

export type BattleshipsErrorResponse = {
  errorMessage: string;
};

export const BattleshipsInvalidMove = (
  move: BattleshipsMove,
  invalidReason: string
): BattleshipsErrorResponse => ({
  errorMessage: `Invalid Battleships move: ${invalidReason}; ${JSON.stringify(move, null, 2)}`,
});

export const BattleshipsGameNotFound = (
  gameId: string
): BattleshipsErrorResponse => ({
  errorMessage: `Battleships game not found: ${gameId}`,
});

/**
 * Simple function to handle unexpected errors and spit out error message
 */
export const BattleshipsInternalServerError = (
  errorMessage: string
): BattleshipsErrorResponse => ({
  errorMessage,
});
