import { BattleshipsGame, BattleshipsUser } from "../../../models";

export type PostBattleshipsCreateGameRequest = Pick<
  BattleshipsGame,
  "gameId" | "boardDimensions"
> &
  Pick<BattleshipsUser, "username">;
