import * as express from 'express';
import * as cors from 'cors'; // liberando acesso para o front!
import * as bodyParser from 'body-parser'; // recebendo json e enviando
import * as morgan from 'morgan';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

// criando app
export const app = express();

// liberando TODO acesso aos serviços.
app.use(cors());

// permite receber e enviar json.
app.use(bodyParser.json());

app.use(morgan(':method :url :status :response-time ms -'));
