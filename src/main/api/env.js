const express = require('express');

const { buildRes } = require('../utils/response');
const EnvService = require('../services/env_service');

const router = express.Router();

/**
 * @swagger
 *
 * /film/{filmId}:
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
 *      - in: path
 *        name: filmId
 *        schema:
 *          type: integer
 *        required: true
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
    const filmInfo = await EnvService.listEnvInfo();
    return buildRes(res, true, filmInfo);
  } catch (e) {
    return buildRes(res, false, e.toString());
  }
});

router.post('/info', async (req, res) => {
  try {
    const { temp, humid } = req.body;

    const filmInfo = await EnvService.createEnvInfo({ temp, humid });
    return buildRes(res, true, filmInfo);
  } catch (e) {
    return buildRes(res, false, e.toString());
  }
});

module.exports = router;
