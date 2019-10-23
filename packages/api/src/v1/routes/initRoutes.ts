import { Express } from 'express';

import {
  todosDeleteAllController,
  todosDeleteController,
  todosGetAllController,
  todosGetController,
  todosPostController,
  todosPutController,
  healthCheckController,
} from '../controllers';

export const initRoutes = (server: Express): Express => {
  server.get('/health/ping', healthCheckController);
  server.get("/todos", todosGetAllController);
  server.get("/todos/:id", todosGetController);
  server.delete("/todos", todosDeleteAllController);
  server.delete("/todos/:id", todosDeleteController);
  server.post("/todos", todosPostController);
  server.put("/todos/:id", todosPutController);

  return server;
};
