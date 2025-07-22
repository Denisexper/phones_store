import { phonesInterface } from "./phoneInterface";


export interface phonesRepositoryInterface {

    getById(id : string) : Promise<phonesInterface>

    getAll() : Promise<phonesInterface[]>

    create(data: string) : Promise<phonesInterface>

    updateById(id: string, data: string) : Promise<Partial<phonesInterface>>

    deleteById(id: string) : Promise<Partial<phonesInterface>>
}