import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

const sequelize = new Sequelize(<string>process.env.POSTGRES_DATABASE, <string>process.env.POSTGRES_USER, <string>process.env.POSTGRES_PASSWORD, {
  dialect: "postgres",
  port: Number(process.env.POSTGRES_PORT),
});

sequelize.authenticate();

export default sequelize;