import { BattleshipsGame, BattleshipsUser } from "../../../models";

export type GetStartConfigurationRequest = Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
