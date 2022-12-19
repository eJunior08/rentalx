import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_ignite",
  database: "rentalx",
  username: "docker",
  password: "ignite",
});

dataSource.initialize();
