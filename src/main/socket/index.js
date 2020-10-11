const socketio = require('socket.io');
const envService = require('../services/env_service');

const sockets = {};

sockets.init = (server) => {
  const io = socketio.listen(server);
  io.sockets.on('connection', (socket) => {
    console.log('socket connected');
    socket.on('message', (data) => {
      envService.createEnvInfo(data).then((result) => {
        console.log(`Insert success temp: ${result.temp} °C, humid: ${result.humid}%`);
        return envService.listEnvInfo({
          page: parseInt(1, 10),
          pageSize: parseInt(10, 10),
        });
      }).then((envInfo) => {
        socket.broadcast.emit('update', envInfo);
      }).catch((err) => {
        console.error(err.message);
      });
    });
  });
};

module.exports = sockets;
