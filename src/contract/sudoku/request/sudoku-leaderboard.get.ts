import { SudokuId } from "../../../models/sudoku/sudoku";

/**
 * The GET request params received from the front end
 */
interface GetSudokuLeaderboardRequest {
  sudokuId: SudokuId,
}

export default GetSudokuLeaderboardRequest;
