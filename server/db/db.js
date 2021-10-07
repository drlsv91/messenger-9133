const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
    logging: false,
    host: "localhost",
    username: "root",
    password: "root",
});

module.exports = db;