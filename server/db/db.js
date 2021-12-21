const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://melihbahri:_Gamer404@cluster0.mq3gk.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});