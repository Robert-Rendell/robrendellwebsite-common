import { SudokuValidation, SudokuValidationIssue } from "../../../models";
import { SudokuId } from "../../../models/sudoku/sudoku";
import { ErrorResponse } from "../../common";

/**
 * Alias to meet Response pattern
 */
export interface SubmitSudokuBasicResponse extends SudokuValidation {
  timeTakenMs?: number;
}
export interface ExtendedSubmitSudokuResponse extends SubmitSudokuBasicResponse {
  validationIssues: SudokuValidationIssue[];
}

export type SubmitSudokuErrorResponse = SudokuValidation & ErrorResponse;

export const SubmitSudokuNotFoundError = (
  sudokuId: SudokuId
): SubmitSudokuErrorResponse => ({
  errorMessage: `Sudoku was not found: '${sudokuId}'`,
  complete: false,
  valid: false,
});

/**
 * Simple function to handle unexpected errors and spit out error message
 */
export const SubmitSudokuInternalServerError = (
  errorMessage: string
): SubmitSudokuErrorResponse => ({
  errorMessage,
  complete: false,
  valid: false,
});
