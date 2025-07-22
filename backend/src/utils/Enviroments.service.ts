import envs from "env-var"
import "dotenv/config"


export const Enviroments = {

    PORT : envs.get("PORT").required().asPortNumber(),
    URL : envs.get("MONGO_URL").required().asUrlString()
}