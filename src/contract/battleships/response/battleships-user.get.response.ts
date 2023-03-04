import { BattleshipsUser } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type GetBattleshipsUserResponse = BattleshipsUser | BattleshipsErrorResponse;
