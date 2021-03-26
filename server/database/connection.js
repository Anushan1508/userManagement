const mongoose = require('mongoose')

const URI ='mongodb+srv://user_01:0771600080@freecluster.b9jj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected Successfully..!');
};

module.exports = connectDB