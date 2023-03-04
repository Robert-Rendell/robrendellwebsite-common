export type BattleshipsAPIRoutes = {
  POST: {
    Join: "/battleships/game/:gameId/join";
    Create: "/battleships/game/new";
    MakeMove: "/battleships/game/:gameId/move";
    User: "/battleships/user/:username";
    StartConfiguration: "/battleships/game/:gameId/start-configuration/:username";
  };
  GET: {
    GameState: "/battleships/game/:gameId";
    User: "/battleships/user/:username";
    StartConfiguration: "/battleships/game/:gameId/start-configuration/:username";
  };
};
