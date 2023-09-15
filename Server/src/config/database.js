import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_tasks", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export const startDb = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: true });
        await sequelize.sync();
        onslotchange.log("connection has been established successfully.");
   } catch (error) {
        console.error("imposible conectarse a la base de datos:", error);
   }
};