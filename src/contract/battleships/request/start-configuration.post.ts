import {
  BattleshipsBoard,
  BattleshipsGame,
  BattleshipsUser,
} from "../../../models";

export type PostStartConfigurationRequest = {
  configuration: BattleshipsBoard;
} & Pick<BattleshipsGame, "gameId"> &
  Pick<BattleshipsUser, "username">;
