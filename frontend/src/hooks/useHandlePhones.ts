import { useCallback, useEffect, useState } from "react"
import { phonesService } from "../services/api/phones.service"
import type { PhonesI } from "../interface/phonesInterface"




export const useHandlePhones = () => {

    //get phones service
    const [ phones, setPhones ] = useState<PhonesI[]>([])
    

    const getAllPhones = useCallback(async () => {

        const service = phonesService()

        const dataPhones = await service.getAllPhones()

        console.log("dataPhones:", dataPhones);

        setPhones(dataPhones)

    }, []);

    //get by id phone service
    const getPhoneId = useCallback( async(id: string) => {

        const service = phonesService()

        const phone = await service.getByIdPhone(id)

        return phone


    }, [])

    //create phones
    const createPhones = useCallback(async (data: PhonesI) => {

        const service = phonesService()

        const response = await service.createPhone(data)

        return response

        getAllPhones

    }, [])

    //update phone service
    const updatePhones = useCallback(async (id: string, data: PhonesI) => {

        const service = phonesService()

        await service.updatePhone(id, data)


        getAllPhones()
    }, [])

    //delete phones service
    const deletePhone = useCallback(async (id: string) =>{

        const service = phonesService()

        await service.deletePhone(id)

        getAllPhones()

    },[])

    useEffect (() => {

        getAllPhones();
        
    }, [])

    return {
        phones,
        deletePhone,
        updatePhones,
        getPhoneId,
        createPhones,

    }
}