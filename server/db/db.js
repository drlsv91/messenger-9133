const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5433/messenger", {
    logging: false,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

module.exports = db;