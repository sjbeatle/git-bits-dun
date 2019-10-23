import express from 'express';
import cors from 'cors';
import { todoDbConnect } from './db';
import { initRoutes } from './routes';

todoDbConnect();

const server = express();
server.set('port', process.env.PORT || 5000);
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

initRoutes(server);

server.listen(server.get("port"), () => {
  console.log("Listening at http://localhost:%d", server.get("port"));
});
