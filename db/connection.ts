import { Sequelize } from "sequelize";

const db = new Sequelize('midb', 'usuario', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
}); 

export default db;
