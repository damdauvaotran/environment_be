const express = require('express');

const { buildRes } = require('../utils/response');
const EnvService = require('../services/env_service');

const router = express.Router();

/**
 * @swagger
 *
 * /env:
 *  get:
 *    security:
 *      - Bearer: []
 *    summary: get film by id
 *    description: Return film info
 *    tags:
 *      - film
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: false
 *      - in: query
 *        name: pageSize
 *        schema:
 *          type: integer
 *        required: false
 *    responses:
 *      '200':
 *        description: OK
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *            data:
 *              $ref: '#/definitions/Film'
 */

router.get('/env', async (req, res) => {
  try {
    const { page, pageSize } = req.query;
    const envInfo = await EnvService.listEnvInfo({
      page: parseInt(page, 10),
      pageSize: parseInt(pageSize, 10),
    });
    return buildRes(res, true, envInfo);
  } catch (e) {
    return buildRes(res, false, e.toString());
  }
});

router.post('/env', async (req, res) => {
  try {
    const { temp, humid } = req.body;

    const filmInfo = await EnvService.createEnvInfo({ temp, humid });
    return buildRes(res, true, filmInfo);
  } catch (e) {
    return buildRes(res, false, e.toString());
  }
});

module.exports = router;
