import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRouter.js';
import { errorMiddleware } from './middlewares/errorMiddlewares.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import 'dotenv/config';

const swaggerDocument = YAML.load('./openapi.yaml');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users', userRoutes);
app.use('/auth', authRoutes);


app.use(errorMiddleware);

export default app;
