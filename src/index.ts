import { envs } from "./infrastructure/config";
import { Server } from "./infrastructure/presentation";
import { AppRoutes } from "./infrastructure/presentation/routes";

(() => {
  new Server({
    port: envs.SERVER_PORT,
    routes: AppRoutes.routes,
  }).start();
})();
