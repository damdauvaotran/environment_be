const db = require('../models');
const { ResponseException } = require('../utils/exception');

const EnvService = {
  async createEnvInfo({ temp, humid }) {
    const tempInfo = await db.Infos.create({
      temp,
      humid,
    });
    return tempInfo;
  },

  async listEnvInfo({ page = 0, pageSize = 0 }) {
    let tempInfo;
    if (pageSize > 0) {
      tempInfo = await db.Infos.findAndCountAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        order: [
          ['created_at', 'DESC'],
        ],
      });
    } else {
      tempInfo = await db.Infos.findAndCountAll({
        order: [
          ['created_at', 'DESC'],
        ],
      });
    }

    return tempInfo;
  },
};

module.exports = EnvService;