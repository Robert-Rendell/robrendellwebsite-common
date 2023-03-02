import { BattleshipsGame } from "../../../models";

export type GetGameStateRequest = Pick<BattleshipsGame, "gameId">;
