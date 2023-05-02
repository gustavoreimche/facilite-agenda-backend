import express from 'express';
import cors from 'cors';
import agendamentoRoutes from './routes/agendamentoRoutes'
import despesasRoutes from './routes/despesasRoutes'
import entradasRoutes from './routes/entradasRoutes'
import userRoutes from './routes/userRoutes'
import dotenv from 'dotenv'

dotenv.config();

require('./database/mongo')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes)
app.use('/agendamentos', agendamentoRoutes)
app.use('/despesas', despesasRoutes)
app.use('/entradas', entradasRoutes)

app.listen(3000)
