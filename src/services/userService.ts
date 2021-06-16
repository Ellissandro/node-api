import { Request, Response } from 'express';
import knex from '../database/connection';
import IUser from '../interfaces/IUser';

class UserService {
    async create(user: IUser): Promise<IUser> {
        const insertedIds = await knex('usuario').insert(user)
        const idusuario = insertedIds[0];

        user.idusuario = idusuario;
        return user;

    }

    async get() {
        return knex('usuario')
            .select("*");
    }

    async getById(idusuario: number) {
        const response = await knex('usuario')
            .select("*")
            .where('idusuario', '=', idusuario)
            .first();

        return response
    }

    async update(idusuario: number, user: IUser) {
        const userUpdate = user;

        await knex('usuario')
            .where('idusuario', '=', idusuario)
            .update(userUpdate)

        return userUpdate;
    }

    async delete(idusuario: number) {
        await knex('usuario')
            .where('idusuario', idusuario)
            .del()

        return { message: 'success' };
    }
}

export default UserService;