import { BattleshipsStartConfiguration } from "../../../models";
import { BattleshipsErrorResponse } from "../error";

export type GetBattleshipsStartConfigurationResponse =
  | BattleshipsStartConfiguration
  | BattleshipsErrorResponse;
