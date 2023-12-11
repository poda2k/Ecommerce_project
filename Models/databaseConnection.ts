import pg from "pg";
const pool: any = pg.Pool;

export const db = new pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce",
  password: "omar",
  port: 5432,
});
