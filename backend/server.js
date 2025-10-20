import express from 'express';
import cors from 'cors';
import { DatabasePostgres } from ' ./databasePostgres';
import './createTable.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const database = new DatabasePostgres();

app.post('/auth/register', async(req,res) =>{
   const { name,email,password } = req.body;
  if(!name || !email || !passowrd){
    return res.status(400).json({ msg: 'Preeencha todos os campos!' });
  }

  const exisistingUser = await database.findByEmail(email);
  if(exisistingUser){
    return.res.status(400).json({ msg: 'Email já encontrado! });
  }

  await database.create({ name,email,password});
  res.status(201).json({ msg: 'Usuário criado!'});

   app.post('/auth/login', async(req, res) => {
      const { email, password } = req.body;
      if(!email || !password){
      return res.status(400).json({ msg: 'Preencha email e senha!'});
    }
})

