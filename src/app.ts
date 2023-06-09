import express from 'express';
import cors from 'cors'; // liberando acesso para o front!
import morgan from 'morgan';
import * as bodyParser from 'body-parser'; // recebendo json e enviando
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as mongo from './config/db';

dotenv.config();

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
  }

  private middlewares(): void {
    // liberando TODO acesso aos serviços.
    this.express.use(cors());

    // gerando logs de req
    this.express.use(morgan(':method :url :status :response-time ms -'));

    // permite receber e enviar json.
    this.express.use(bodyParser.json());
  }

  private database(): void {
    mongo.connectDb();
  }

  private routes(): void {
    this.express.get('/', (req, res) => {
      res.send({ Message: 'Hello World!' });
    });
  }
}

export default new App().express;
