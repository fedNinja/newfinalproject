import {Router} from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.getUsers);

export default routes;
