import { Router } from 'express';
import * as choreController from './controller';
const routes = new Router();


routes.get('/chores', choreController.getChores);
