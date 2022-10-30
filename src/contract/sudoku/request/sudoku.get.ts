import { SudokuId } from "../../../models/sudoku/sudoku";

/**
 * The GET request params received from the front end
 */
interface GetSudokuRequest {
  sudokuId: SudokuId,
}

export default GetSudokuRequest;
