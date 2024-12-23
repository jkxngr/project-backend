const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
        dialectOptions: {
            connectTimeout: 20000 // Set timeout for establishing a connection (10 seconds)
        },
        pool: {
            max: 5,  // Max number of connection in pool
            min: 0,  // Min number of connections in pool
            acquire: 30000, // Time to wait before throwing an error when acquiring a connection
            idle: 10000    // Max time before a connection is released when idle
        }
    }
    
);

module.exports = sequelize;
