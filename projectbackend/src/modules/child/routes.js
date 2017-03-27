import {Router} from 'express';
import * as ChildController from './controller';
const routes = new Router();

routes.post('/kids', ChildController.addChild);

export default routes;
