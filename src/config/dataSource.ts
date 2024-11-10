import { DataSource } from "typeorm";
import dotenv from "dotenv";

// dotenv.config( { path: ".env.postgres" } );
dotenv.config( { path: ".env.mysql" } );

console.log("process.env.DB_TYPE: ", process.env.DB_TYPE);

export const DB_HOST: string = process.env.DB_HOST || "localhost";
export const DB_NAME: string = process.env.DB_NAME || "my_db";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "";
export const DB_PORT: number = Number(process.env.DB_PORT) || 3306;
export const DB_TYPE: any = process.env.DB_TYPE || "mysql";
export const DB_USER: string = process.env.DB_USER || "root";
export const JWT_SECRET: string = process.env.JWT_SECRET || "JWT_SECRET";
export const PORT: number = Number(process.env.PORT) || 3000;

export const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [],
  subscribers: [],
  migrations: [],
});
