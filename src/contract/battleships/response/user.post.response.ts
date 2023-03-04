import { BattleshipsUser } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type PostBattleshipsUserResponse =
  | BattleshipsUser
  | BattleshipsErrorResponse;
