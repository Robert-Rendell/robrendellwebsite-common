import { BattleshipsGame, BattleshipsUser } from "../../../models";

export type PostBattleshipsJoinGameRequest = Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
