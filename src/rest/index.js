import 'babel-polyfill';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerExpress from 'swagger-express-mw';

const app = express();
app.use(bodyParser.json());

const config = {
  swagger: {
    appRoot: `${__dirname}/../`,
    swaggerFile: `${__dirname}/../config/swagger/swagger.yaml`,
  },
};

swaggerExpress.create(config.swagger, (error, swagger) => {
  if (error) { throw error; }
  swagger.register(app);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
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
});
