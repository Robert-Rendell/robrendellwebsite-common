import { BattleshipsStartConfiguration } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type PostBattleshipsStartConfigurationResponse =
  | BattleshipsStartConfiguration
  | BattleshipsErrorResponse;
