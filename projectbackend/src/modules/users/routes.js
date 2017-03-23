import {Router} from 'express';
import * as UserController from './controller';
import bodyParser from 'body-parser';
const routes = new Router();

routes.use(bodyParser.json());
routes.post('/users',bodyParser, UserController.createUser);
routes.get('/users', bodyParser,UserController.getUsers);
routes.get('/users/:id', bodyParser, UserController.getUserById);

export default routes;
