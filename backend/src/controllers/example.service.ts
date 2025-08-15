import { phonesExample } from "../repository/phonesExample";
import { Request, response, Response } from "express";



export class controllerExample {

    private repositoro : phonesExample

    constructor (
        repositoro : phonesExample
    ){
        this.repositoro = repositoro
    }

    async getById (req: Request, res: Response){

        const { id } = req.params;

        try {
            
            const response = await this.repositoro.getById(id)

            res.status(200).json({
                msj: "sucess!!",
                data: response
            })

        } catch (error) {
            
            res.status(500).json({
                msj: "error buscando",
                error: error as string
            })
        }
    }

    async getAll (req: Request, res: Response) {

        try {
            
            const response = await this.repositoro.getAll()

            res.status(200).json({
                msj: "sucess",
                data: response
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "error obteniendo",
                error: error as string
            })
        }
    }

    async create (req: Request, res: Response) {


        try {
            
            const response = await this.repositoro.create(req.body)

            res.status(200).json({
                msj: "sucess",
                data: response
            })

        } catch (error) {
            
            res.status(500).json({
                msj: "error obteniendo",
                error: error as string
            })
        }
    }

    async update (req: Request, res: Response) {

        const { id } = req.params

        try {
            
            const response = await this.repositoro.updateById(id, req.body)

            res.status(200).json({
                msj: "sucess",
                data: response
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "ocurrio un error",
                error: error as string
            })
        }
    }

    async deleteP (req: Request, res: Response) {

        const { id } = req.params

        try {
            
            const reesponse = await this.repositoro.deleteById(id)

            res.status(200).json({
                msj: "sucess",
                data: response
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "error obtenido",
                error: error as string
            })
        }
    }

}