import express from 'express';
import { mongoConnect } from './database/mongo';
import User from './models/User';

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

mongoConnect();

app.use(express.json())

// CONTROLLER
route.get('/', (req: Request, res: Response) => {
  
  let newUser = {
    name: 'guga',
    password: '123',
    email: '123@123',
    type: 0
  }
  
  addUser(newUser);

  getUsers().then(users => {
    res.json(users)
  })

})


//SERVICE
async function getUsers() {
  const usuarios = await User.find({})
  return usuarios;
}


async function addUser(newUser: any) {

  await User.create({
    name: newUser.name,
    password: newUser.password,
    email: newUser.email,
    type: newUser.type
  })
}

app.use(route)

app.listen(3000, () => 'server running on port 3333')