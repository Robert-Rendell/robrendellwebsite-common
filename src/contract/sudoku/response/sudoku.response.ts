import { SubmissionId } from "../../../models/sudoku/submission";
import { SudokuId } from "../../../models/sudoku/sudoku";
import ErrorResponse from "../../common/responses/error.response";

export interface SudokuResponse {
  sudokuId: SudokuId,
  /**
   * if puzzle is truthy then the suduku was found in dynamodb, if not it's undefined
   */
  puzzle: number[][] | undefined,
  submissionId: SubmissionId,
}

export type SudokuErrorResponse = SudokuResponse & ErrorResponse;

/**
 * Returned when the sudoku is not found
 */
export const SudokuNotFoundResponse = (sudokuId: string): SudokuErrorResponse => ({
  errorMessage: `Sudoku was not found: '${sudokuId}'`,
  sudokuId: '',
  puzzle: undefined,
  submissionId: '',
});

/**
 * Simple function to handle unexpected errors and spit out error message
 */
export const SudokuInternalServerError = (errorMessage: string): SudokuErrorResponse => ({
  errorMessage,
  sudokuId: '',
  puzzle: undefined,
  submissionId: '',
});
