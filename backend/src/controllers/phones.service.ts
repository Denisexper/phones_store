import { phonesRepositoryService } from "../repository/phonesRepository";
import { Request, response, Response } from "express";


export class phonesControllerServie {

    private repository : phonesRepositoryService

    constructor (

        repository : phonesRepositoryService
    ){
         this.repository = repository
    }

    async getByIdPhone (req: Request, res: Response) {

        const { id } = req.params

        try {
            
            const reposne = await this.repository.getById(id)

            res.status(200).json({
                msj: "phones get sucessfully",
                data: response
            })

        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                
                error: error instanceof Error
            })

        }
    }

    async getAllPhones (req: Request, res: Response) {

        try {
            
            const response = await this.repository.getAll()

            res.status(200).json({
                msj: "phones get sucessfully",
                data: response
            })

        } catch (error) {
            
            res.status(500).json({

                msj: "uknow error",
                error: error instanceof Error
            })

        }
    }

    async createPhone (req: Request, res: Response) {

        try {
            
            const response = await this.repository.create(req.body)

            res.status(200).json({

                msj: "phones created sucessfully",
                data: response
            })
        } catch (error) {
            
            res.status(500).json({

                msj:"uknow error",
                error: error instanceof Error
            })

        }
    }

    async updatePhone (req: Request, res: Response) {

        const { id } = req.params

        try {
            
            const response = await this.repository.updateById(id, req.body)

            res.status(200).json({

                msj: "phone created sucessfully",
                data: response
            })

        } catch (error) {
            
            res.status(500).json({

                msj: "uknow error",
                error: error instanceof Error
            })
        }
    }

    async deletePhone (req: Request, res: Response) {

        const { id } = req.params

        try {
            
            const response = await this.repository.deleteById(id)

            res.status(200).json({

                msj: "phone deleted sucessfully",
                data: response
            })

        } catch (error) {
            
            res.status(500).json({

                msj: "uknow error",
                error: error instanceof Error
            })
        }
    }
}