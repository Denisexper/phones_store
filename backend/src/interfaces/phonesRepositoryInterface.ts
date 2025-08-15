import { phonesInterface } from "./phoneInterface";


export interface phonesRepositoryInterface {

    getById(id : string) : Promise<phonesInterface>

    getAll() : Promise<phonesInterface[]>

    create(data: string) : Promise<phonesInterface>

    updateById(id: string, data: Partial<phonesInterface>) : Promise<phonesInterface>

    deleteById(id: string) : Promise<Partial<phonesInterface>>
}


export interface phonesRepositoryInterface2 {

    getAll() : Promise<phonesInterface[]>

    getById (id: string) : Promise<phonesInterface>

    create (data: Partial<phonesInterface>) : Promise<phonesInterface>

    update (id: string, data: Partial<phonesInterface>) : Promise<phonesInterface>

    delete(id: string) : Promise<phonesInterface>
}

//PARTIAL: toma todas lasl propiedades de un tipo y las vuelve opcionales