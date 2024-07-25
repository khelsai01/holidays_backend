import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes';

// Load environmen
dotenv.config();

const app = express();

const mongoURI = process.env.MONGO_URI as string;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as mongoose.ConnectOptions).then(() => console.log('MongoDB connected<---->'))
  .catch(err => console.error(err));

app.use(cors());
app.use(express.json());

app.get('/', async(req: Request, res: Response) => {
  
  res.send('Welcome to the Holidays backend api');
})
app.use('/api/admin', adminRoutes);
app.use('/api', userRoutes);

export default app;
