import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositoy } from '../repositories/UsersRepository';

/**
 * Classe de controle do usuario
 */
class UserControler {


    /**
     * função para criar o repositório - tabela usuario
     */
    async create(request: Request, response: Response) {

        /**
         * recebe o nome e email do request
         */
        const { name, email } = request.body;

        /**
         * seleciona a tabela usuario
         */
        const userRepository = getCustomRepository(UsersRepositoy);

        /**
         * verifica existencia do email na tabela
         */
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        /**
         * condicao se o email existir na tabela retorna uma mensagem de erro
         */
        if (userAlreadyExists) {
            return response.status(400).json({
                error: "User already exists!",
            })
        };

        /**
         * cria o repositorio
         */
        const user = userRepository.create({
            name, email
        });

        /**
         * salva o repositorio
         */
        await userRepository.save(user);

        /**
         * retorna o usuario no formato json
         */
        return response.status(201).json(user);
    }
}

export { UserControler };
