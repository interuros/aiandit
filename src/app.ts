import express from 'express';
import configService from './config';
import { db } from './database';
import { router } from './router';

const app = express();
const port = configService.get('APP_PORT');

app.use(express.json());

db.sync().then(() => {
  console.log('Database and tables synchronized.');
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
