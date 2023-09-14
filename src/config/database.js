import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("db_tasks", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export const startDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
   } catch (error) {
        console.error("imposible conectarse a la base de datos:", error);
   }
}