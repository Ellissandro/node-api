import IUser from "../interfaces/IUser";

export class User implements IUser {
    idusuario: number;
    primeironome: string;
    sobrenome: string;
    email: string;
    idade: number;
    sexo: string;
    constructor(user: IUser) {
        this.idusuario = user.idusuario;
        this.primeironome = user.primeironome;
        this.sobrenome = user.sobrenome;
        this.email = user.email;
        this.idade = user.idade;
        this.sexo = user.sexo;
    }

}