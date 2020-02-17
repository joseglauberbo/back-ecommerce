const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ecommerce');

mongoose.connection.on('connected', () => {
  console.log('connected on db');
});

mongoose.connection.on('error', (err) => {
  console.log('error on connection: ' + err);
});

mongoose.connection.on('disconnect', () => {
  console.log('disconnected :(');
});