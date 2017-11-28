import 'babel-polyfill';
import fs from 'fs';
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

app.get('/v1/swagger.yaml', (req, res, next) => {
  fs.readFile(`${__dirname}/../config/swagger/swagger.yaml`, (err, file) => {
    if (err) {
      res.status(500);
      res.end();
      return next();
    }
    res.write(file);
    res.end();
    return next();
  });
});

app.listen(process.env.API_PORT, () => {
  console.log(`User Directory API is listening on port ${process.env.API_PORT}!`); // eslint-disable-line no-console
});
