const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');

dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log('DB connected');
}).catch((err) => {
  console.log(err);
});

const app = express();
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);

app.listen(3002, () => {
  console.log('backend is running on port 3002');
});
