import {connect} from "mongoose"
import express from "express"
import { Enviroments } from "./utils/Enviroments.service"

class server {

    private server : typeof express.application
    private port : typeof Enviroments.PORT

    constructor (
        server : typeof express.application,

        port : typeof Enviroments.PORT
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
Server.initServer()