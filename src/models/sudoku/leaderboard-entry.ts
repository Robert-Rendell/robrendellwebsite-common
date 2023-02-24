import { Submission } from "./submission";

export type LeaderboardEntry = Pick<
  Submission,
  "timeTakenMs" | "dateCompleted" | "submitterName" | "timesValidated"
>;
