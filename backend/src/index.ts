import {connect} from "mongoose"
import express, { Router, json } from "express"
import { Enviroments } from "./utils/Enviroments.service"
import { phonesRoutes } from "./routes/phonesRoutes"
import { phonesRepositoryService } from "./repository/phonesRepository"
import { phonesModel } from "./models/phoneModel"
import { phonesControllerServie } from "./controllers/phones.service"
import cors from "cors"
class server {

    private server : typeof express.application
    private port : typeof Enviroments.PORT

    constructor (
        server : typeof express.application,

        port : typeof Enviroments.PORT,
        
    ){
        this.port = port,
        this.server = server   
    }


    async mongoService () {

        try {
            
            await connect(Enviroments.URL)
            console.log("connected to db")

        } catch (error) {
            
            throw new Error(error as string)
        }
    }

    initServices () {

        const repository = new phonesRepositoryService (phonesModel)

        const controller = new phonesControllerServie(repository)

        const routes = new phonesRoutes(controller, Router())

        this.server.use(json())

        this.server.use(cors())

        //iniciamos el servidor
        this.server.use("/api", routes.initRoutes())

    }

    initServer () {

        try {
            
         this.server.listen(this.port, () => {
            console.log("server up")

         })
        } catch (error) {
            
            throw new Error(error as string)
        }
    }

    
}

const Server = new server(express(), Enviroments.PORT)
Server.mongoService()
Server.initServices()
Server.initServer()
