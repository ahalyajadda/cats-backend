import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import uploadRoute from './routes/uploadRoutes.js';
import catsRoute from './routes/catsRoutes.js';
dotenv.config();
const app = express();

//Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('succesfully connected to database'))
  .catch((err) => console.log(err));

//middlewares

app.use(express.json());
app.use(cors());
app.use('/upload', uploadRoute);
app.use('/cats', catsRoute);

//routes
app.get('/', (req, res) => {
  res.send('hello world');
});

const port = process.env.PORT || 4004;
app.listen(port, () => {
  console.log('server started');
});
