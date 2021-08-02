import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8086, () => {
  console.log('Servidor Rodando em 8086');
})