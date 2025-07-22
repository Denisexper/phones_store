import { phonesInterface } from "../interfaces/phoneInterface";
import { phonesRepositoryInterface } from "../interfaces/phonesRepositoryInterface";

export class phonesRepositoryService implements phonesRepositoryInterface {
    
    getById(id: string): Promise<phonesInterface> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<phonesInterface[]> {
        throw new Error("Method not implemented.");
    }
    create(data: string): Promise<phonesInterface> {
        throw new Error("Method not implemented.");
    }
    updateById(id: string, data: string): Promise<Partial<phonesInterface>> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<Partial<phonesInterface>> {
        throw new Error("Method not implemented.");
    }
}