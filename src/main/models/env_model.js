const type = require('sequelize');

module.exports = (db, config) => db.define('environment',
  {
    id: {
      type: type.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    objectTemp: {
      type: type.FLOAT,
      allowNull: false,
    },
    ambientTemp: {
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
