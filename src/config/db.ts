import * as mongoose from 'mongoose';

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;
const url = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

mongoose.connect(url, options, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(
    'Connected on MongoDB:',
    `${mongoose.connection.host} (${mongoose.connection.name})`
  );
});

mongoose.connection.on('connected', function () {
  console.log(
    `Mongoose default connection open to ${mongoose.connection.host} (${mongoose.connection.name})`
  );
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
  process.exit(1);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
  process.exit(1);
});
