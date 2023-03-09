const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://kristinbrewer:HHarperLL0!a@cluster0.ov4qhzq.mongodb.net/?retryWrites=true&w=majority';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
