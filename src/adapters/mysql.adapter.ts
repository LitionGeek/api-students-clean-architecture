import mysql from "mysql";
import { envs } from "../config";

const mysqlDB = mysql.createPool({
  connectionLimit: 5000,
  host: envs.MYSQL_HOST,
  user: envs.MYSQL_USER,
  password: envs.MYSQL_PASSWORD,
  database: envs.MYSQL_DATABASE,
  port: envs.MYSQL_PORT,
});

mysqlDB.getConnection((err) => {
  if (err) {
    console.error("Error connecting to mysql " + err);
    return;
  }
});

export { mysqlDB };
