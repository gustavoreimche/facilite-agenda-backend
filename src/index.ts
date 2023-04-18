import express from 'express';
import cors from 'cors';
import agendamentoRoutes from './routes/agendamentoRoutes'
import despesasRoutes from './routes/despesasRoutes'
import dotenv from 'dotenv'

dotenv.config();

require('./database/mongo')

const app = express();

app.use(express.json());

app.use(cors());

app.use('/agendamentos', agendamentoRoutes)
app.use('/despesas', despesasRoutes)

app.listen(3000)