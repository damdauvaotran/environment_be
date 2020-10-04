const socketio = require('socket.io');
const envService = require('../services/env_service');

const sockets = {};

sockets.init = (server) => {
  const io = socketio.listen(server);
  io.sockets.on('connection', (socket) => {
    console.log('socket connected');
    socket.on('message', (data) => {
      console.log(data);
      envService.createEnvInfo(data).then((result) => {
        console.log(`Insert success temp: ${result.temp} C, humid:  ${result.humid}%`);
      }).catch((err) => {
        console.error(err.message);
      });
    });
  });
};

module.exports = sockets;
