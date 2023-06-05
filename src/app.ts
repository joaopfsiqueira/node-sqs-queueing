import express from 'express';
import cors from 'cors'; // liberando acesso para o front!
import morgan from 'morgan';
import * as bodyParser from 'body-parser'; // recebendo json e enviando
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as mongo from './config/db';

dotenv.config();

// criando app
export const app = express();

mongo.connectDb();

// liberando TODO acesso aos serviços.
app.use(cors());

// permite receber e enviar json.
app.use(bodyParser.json());

app.use(morgan(':method :url :status :response-time ms -'));
