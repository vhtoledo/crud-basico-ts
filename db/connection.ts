import { Sequelize } from "sequelize";

const db = new Sequelize('sutrappa', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
}); 

export default db;