const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5433/messenger", {
    logging: false,
    host: "localhost",
    username: "postgres",
    password: "root",
});

module.exports = db;