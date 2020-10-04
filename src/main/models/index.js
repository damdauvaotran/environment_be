const Sequelize = require('sequelize');
const mysqlConfig = require('../config/mysql');

// Single model
const InfoModel = require('./env_model');

const DATABASE_NAME = mysqlConfig.name;
const DATABASE_USERNAME = mysqlConfig.username;
const DATABASE_PASSWORD = mysqlConfig.password;
const DATABASE_URL = mysqlConfig.url;
const DATABASE_PORT = mysqlConfig.port;

const db = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  host: DATABASE_URL,
  port: DATABASE_PORT,
  dialect: 'mysql',
  timezone: '+07:00',
  retry: {
    max: 100,
    timeout: 60 * 60 * 1000,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const tableConfig = {
  underscored: true,
  timestamps: true,
  sequelize: db,
  charset: 'utf8',
  collate: 'utf8_general_ci',
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
};

// Single table
const Infos = InfoModel(db, tableConfig);

// Many to many table

db.sync({ force: false }).then(async () => {
  console.log('Database & tables created!');
  // Import default dev data
});

module.exports = {
  Infos,
};
