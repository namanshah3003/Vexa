import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION;

//preconfigure express app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Middleware
app.use('/auth', authRoutes);
app.get("/", (req, res) => {
    res.send("*** Welcome to Bug Tracker API ***");
});

//Connect to DB
async function startServer() {
    try {
      await mongoose.connect(MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Successfully Connected to MongoDB');
      app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  // Call the function to start the server
  startServer();