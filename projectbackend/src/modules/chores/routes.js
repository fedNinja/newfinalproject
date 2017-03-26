import {Router} from 'express';
import * as ChoreController from './controller';
const routes = new Router();

routes.post('/chores', ChoreController.addChores);
routes.get('/chores', ChoreController.getChores);

export default routes;
