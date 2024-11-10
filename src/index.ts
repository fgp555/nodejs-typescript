import app from "./server";
import "reflect-metadata";
import { AppDataSource, PORT } from "./config/dataSource";

const initialize = async () => {
  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

initialize();
