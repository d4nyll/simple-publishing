import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

import * as controllers from '../controllers';

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/v1/posts', controllers.posts.create);
app.get('/v1/posts', controllers.posts.retrieveAll);
app.get('/v1/posts/:id', controllers.posts.retrieve);
app.delete('/v1/posts/:id', controllers.posts.del);

app.post('/v1/buggy-endpoint', () => {
  throw new Error('Intentional Error');
});

app.listen(process.env.API_PORT, () => {
  console.log(`User Directory API is listening on port ${process.env.API_PORT}!`); // eslint-disable-line no-console
});
