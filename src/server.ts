
import express from 'express'
import { mongoConnect } from './database/mongo'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

mongoConnect();

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(3000, () => 'server running on port 3333')