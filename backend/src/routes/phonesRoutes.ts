import { phonesControllerServie } from "../controllers/phones.service";
import { Router, Request, Response } from "express";


export class phonesRoutes {

    private controller : phonesControllerServie
    private router : Router

    constructor (
        controller : phonesControllerServie,
        router : Router
    ){
        this.controller = controller,
        this.router = router
    }

    initRoutes () {

        try {
            
            this.router.get("/phone/:id", (req: Request, res: Response) => this.controller.getByIdPhone(req, res)),
            this.router.get("/phones", (req: Request, res: Response) => this.controller.getAllPhones(req, res)),
            this.router.post("/phone", (req: Request, res: Response) => this.controller.createPhone(req, res)),
            this.router.put("/phone/:id", (req: Request, res: Response) => this.controller.updatePhone(req, res)),
            this.router.delete("/phone/:id", (req: Request, res: Response) => this.controller.deletePhone(req, res))

        return this.router

        } catch (error) {
            
            throw new Error(error as string)
        }

    }
}