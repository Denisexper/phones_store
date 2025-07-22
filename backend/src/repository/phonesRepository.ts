import { phonesInterface } from "../interfaces/phoneInterface";
import { phonesRepositoryInterface } from "../interfaces/phonesRepositoryInterface";
import { phonesModel } from "../models/phoneModel";

export class phonesRepositoryService implements phonesRepositoryInterface {

    private model : typeof phonesModel

    constructor (
        model : typeof phonesModel
    ){
        this.model = model
    }
    
    async getById(id: string): Promise<phonesInterface> {

        try {
            
            const response = await this.model.findById(id)

            return response!

        } catch (error) {
            
            throw new Error (error as string)
        }
    }
    async getAll(): Promise<phonesInterface[]> {
        
        try {
            
            const response = await this.model.find()

            return response

        } catch (error) {
            
            throw new Error (error as string)
        }
    }
   async create(data: string): Promise<phonesInterface> {

        try {
            
            const response = await this.model.create(data)

            return response

        } catch (error) {
            
            throw new Error (error as string)
        }
    }
    async updateById(id: string, data: Partial<phonesInterface>): Promise<Partial<phonesInterface>> {

        try {
            
            const response = await this.model.findByIdAndUpdate(id, data)

            return response!

        } catch (error) {

            throw new Error (error as string)
        }
    }
    async deleteById(id: string): Promise<Partial<phonesInterface>> {

        try {
            
            const response = await this.model.findByIdAndDelete(id)

            return response!

        } catch (error) {
            
            throw new Error (error as string)
        }
    }
}