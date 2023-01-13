import { DataSource } from "typeorm";
import { User } from "../../../modules/accounts/infra/typeorm/entities/User";
import { Category } from "../../../modules/cars/infra/typeorm/entities/Category";
import { Specification } from "../../../modules/cars/infra/typeorm/entities/Specification";

export const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_ignite",
  database: "rentalx",
  username: "docker",
  password: "ignite",
  entities: [Category, Specification, User],
  migrations: ["./src/database/migrations/*.ts"],
});

dataSource.initialize();
