import { BattleshipsGame, BattleshipsUser } from "../../../models";

export type GetGameStateRequest = Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
