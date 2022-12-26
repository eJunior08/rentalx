import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";

export const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_ignite",
  database: "rentalx",
  username: "docker",
  password: "ignite",
  entities: [Category, Specification],
  migrations: ["./src/database/migrations/*.ts"],
});

dataSource.initialize();
