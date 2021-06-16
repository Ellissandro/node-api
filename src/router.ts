import express from 'express';
import UsersController from './controllers/usersController';

const routes = express.Router();
const usersController = new UsersController();

routes.post('/user', usersController.create)
routes.get('/user', usersController.get)
routes.get('/user/:idusuario', usersController.getById)
routes.put('/user/:idusuario', usersController.update)
routes.delete('/user/:idusuario', usersController.delete)

export default routes;