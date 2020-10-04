const type = require('sequelize');

module.exports = (db, config) => db.define('environment',
  {
    id: {
      type: type.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    temp: {
      type: type.FLOAT,
      allowNull: false,
    },
    humid: {
      type: type.FLOAT,
      allowNull: false,
    },
  },
  config);

/**
 * @swagger
 *
 * definitions:
 *  Environment:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      temp:
 *        type: double
 *      humid:
 *        type: double
 */
