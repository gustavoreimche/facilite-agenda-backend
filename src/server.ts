import express from 'express';
import { mongoConnect } from './database/mongo';
import agendamentoRoutes from './routes/agendamentoRoutes'
import cors from 'cors';

mongoConnect();

const app = express();

app.use(express.json());

app.use(cors());

app.use(agendamentoRoutes)

app.listen(3000)