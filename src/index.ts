import express from "express";
import cors from "cors";
import agendamentoRoutes from "./routes/agendamentoRoutes";
import despesasRoutes from "./routes/despesasRoutes";
import entradasRoutes from "./routes/entradasRoutes";
import userRoutes from "./routes/userRoutes";
import alunasRoutes from "./routes/alunasRoutes";
import dotenv from "dotenv";
import { auth } from "./middlewares/auth";

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

dotenv.config();

require("./database/mongo");

const app = express();

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(cors());

app.use("/alunas", alunasRoutes);
app.use("/users", userRoutes);
app.use("/agendamentos", auth.private, agendamentoRoutes);
app.use("/despesas", auth.private, despesasRoutes);
app.use("/entradas", auth.private, entradasRoutes);

app.listen(3000);
