import { Router } from 'express';
import { UserControler } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController'

/**
 * criacao das rotas para acesso ao banco de dados
 */
const router = Router();

const userController = new UserControler();
const surveysController = new SurveysController();


/**
 * rota para criação do usuario
 */
router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };