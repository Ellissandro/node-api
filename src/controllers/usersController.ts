import { Request, Response } from 'express';
import UserService from '../services/userService';
import { User } from '../models/user';

const usersController = new UserService();

class UsersController {
    async create(request: Request, response: Response) {
        try {
            const user = new User(request.body)
            const newUser = await usersController.create(user);
            return response.json(newUser)

        } catch (error) {
            return response.status(400).json(error)
        }
    }

    async get(request: Request, response: Response) {
        try {
            const users = await usersController.get();
            return response.json(users)

        } catch (error) {
            return response.status(400).json(error)
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const idusuario = Number(request.params.idusuario);
            const user = await usersController.getById(idusuario);

            if (user)
                return response.json(user)
            else
                return response.status(400).json({ message: 'Usuário não encontrado' })

        } catch (error) {
            return response.status(400).json(error)
        }
    }

    async update(request: Request, response: Response) {
        try {
            const user = new User(request.body)
            const idUsuario = Number(request.params.idusuario);
            const updateUser = await usersController.update(idUsuario, user);
            return response.json(updateUser)

        } catch (error) {
            return response.status(400).json(error)
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const idUsuario = Number(request.params.idusuario);
            const data = await usersController.delete(idUsuario);
            return response.json(data)

        } catch (error) {
            return response.status(400).json(error)
        }
    }

}


export default UsersController