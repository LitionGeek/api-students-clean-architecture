import "dotenv/config";
import { get } from "env-var";

export const envs = {
  MYSQL_HOST: get("MYSQL_HOST").default("localhost").asString(),
  MYSQL_USER: get("MYSQL_USER").required().asString(),
  MYSQL_PASSWORD: get("MYSQL_PASSWORD").default("").asString(),
  MYSQL_DATABASE: get("MYSQL_DATABASE").default("clean_db").asString(),
  MYSQL_PORT: get("MYSQL_PORT").default("3306").asPortNumber(),
  SERVER_PORT: get("SERVER_PORT").default("3100").asPortNumber(),
};
