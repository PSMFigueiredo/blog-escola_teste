import {Request, Response} from "express";

    class AlunoRoute{

        async criar (req: Request, res: Response){
            res.json({
                message: 'Welcome',
            });
        }

        async atualizar (req: Request, res: Response){
            res.json({
                message: 'Welcome',
            });
        }
        
        async deletar (req: Request, res: Response){
            res.json({
                message: 'Welcome',
            });
        }
       
        async buscar (req: Request, res: Response){
            res.json({
                message: 'Welcome',
            });
        }

        async buscarTodos (req: Request, res: Response){
            res.json({
                message: 'Welcome',
            });
        }
        
    }

    export const aluno = new AlunoRoute();