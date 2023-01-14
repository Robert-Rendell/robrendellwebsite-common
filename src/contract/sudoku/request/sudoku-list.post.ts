import { ListSudokuParams } from "../../../models/sudoku/list-sudoku-params";
import { PaginationRequest } from "../../common/request/pagination.request";

/**
 * The POST request params received from the front end
 */
export interface PostSudokuListRequest extends PaginationRequest {
  filters: ListSudokuParams;
}
