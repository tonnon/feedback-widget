import 'reflect-metadata';
import cors from 'cors';
import express from 'express';

import { routes } from './routes';

import '../../container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
