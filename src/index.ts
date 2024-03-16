import { envs } from "./config";
import { Server } from "./presentation";
import { AppRoutes } from "./presentation/routes";

(() => {
  new Server({
    port: envs.SERVER_PORT,
    routes: AppRoutes.routes,
  }).start();
})();
