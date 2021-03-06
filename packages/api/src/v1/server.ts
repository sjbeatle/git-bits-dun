import cors from 'cors';
import express from 'express';
import { todoDbConnect } from './db';
import { initRoutes } from './routes';

todoDbConnect();

const server = express();
server.set('port', process.env.PORT || 5000);
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

initRoutes(server);

server.listen(server.get('port'), () => {
  // tslint:disable-next-line:no-console
  console.log('Listening at http://localhost:%d', server.get('port'));
});
