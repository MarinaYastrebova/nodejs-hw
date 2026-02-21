import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB';
import { logger } from './middleware/logger';
import { notFoundHandler } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';
import notesRoutes from './routes/notesRoutes';

const startServer = async () => {
  await connectMongoDB();

  const app = express();
  app.use(logger);
  app.use(express.json());
  app.use(cors());
  app.use(notesRoutes);
  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = process.env.PORT ?? 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
