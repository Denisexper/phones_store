
import type { PhonesI, PhonesII } from "../../interface/phonesInterface";
import { axiosClient } from "../axiosClient.service";


export const phonesService = () => ({

    async getAllPhones () : Promise<PhonesII[]> {

        try {
            
            const response = await axiosClient.get("/phones")

            return response.data.data

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    },

    async getByIdPhone (id : string) {

        try {
            
            const response = await axiosClient.get(`/phone/${id}`)

            return response

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    },

    async createPhone (data : PhonesI) {

        try {
            
            const response = await axiosClient.post("/phone", data)

            return response

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    },

    async updatePhone (id: string, data: PhonesII) {

        try {
            
            const response = await axiosClient.put(`/phone/${id}`, data)

            return response

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    },

    async deletePhone (id : string) {

        try {
            
            const response = await axiosClient.delete(`/phone/${id}`)

            return response

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    }
    
})