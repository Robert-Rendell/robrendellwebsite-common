import { SudokuId } from "../../../models/sudoku/sudoku";
import SudokuValidation from "../../../models/sudoku/sudoku-validation";
import SudokuValidationIssue from "../../../models/sudoku/sudoku-validation-issue";
import ErrorResponse from "../../common/responses/error.response";

/**
 * Alias to meet Response pattern
 */
export interface SubmitSudokuBasicResponse extends SudokuValidation {
  timeTakenMs?: number;
}
export interface ExtendedSubmitSudokuResponse extends SudokuValidation {
  validationIssues: SudokuValidationIssue[],
}

export type SubmitSudokuErrorResponse = SudokuValidation & ErrorResponse;

export const SubmitSudokuNotFoundError = (
  sudokuId: SudokuId,
): SubmitSudokuErrorResponse => ({
  errorMessage: `Sudoku was not found: '${sudokuId}'`,
  complete: false,
  valid: false,
});

/**
 * Simple function to handle unexpected errors and spit out error message
 */
export const SubmitSudokuInternalServerError = (
  errorMessage: string,
): SubmitSudokuErrorResponse => ({
  errorMessage,
  complete: false,
  valid: false,
});
