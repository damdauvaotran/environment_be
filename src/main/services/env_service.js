const db = require('../models');
const { ResponseException } = require('../utils/exception');

const EnvService = {
  async createEnvInfo({ objectTemp, ambientTemp }) {
    const tempInfo = await db.Infos.create({
      objectTemp,
      ambientTemp,
    });
    return tempInfo;
  },

  async listEnvInfo({ page = 0, pageSize = 10 }) {
    let tempInfo;
    if (pageSize && page) {
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

    return {
      count: tempInfo.count,
      rows: tempInfo.rows.map((x) => ({
        id: x.id,
        objectTemp: x.objectTemp,
        ambientTemp: x.ambientTemp,
        sampleTime: x.createdAt,
      })),
    };
  },
};

module.exports = EnvService;
