import * as dotenv from 'dotenv';
import { DateTime } from "luxon";
import pg from "pg";
import { Sequelize } from "sequelize";

dotenv.config();

const TYPE_TIMESTAMPTZ = 1184;

pg.types.setTypeParser(TYPE_TIMESTAMPTZ, "text", function (text) {
    return DateTime.fromSQL(text).setZone("America/Sao_Paulo").toISO();
});

const sequelize =  new Sequelize(
    <string>process.env.POSTGRES_DATABASE,
    <string>process.env.POSTGRES_USER,
    <string>process.env.POSTGRES_PASSWORD,
    {
      host: <string>process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      dialect: "postgres",
      dialectOptions: {
        useUTC: false,
      },
      logging: true,
      timezone: "America/Sao_Paulo",
    }
)

sequelize.query("CREATE EXTENSION IF NOT EXISTS unaccent");

module.exports = sequelize;