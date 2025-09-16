import { useCallback, useEffect, useState } from "react"
import { phonesService } from "../services/api/phones.service"
import type { PhonesI, PhonesII } from "../interface/phonesInterface"




export const useHandlePhones = () => {

    //get phones service
    const [ phones, setPhones ] = useState<PhonesII[]>([])
    

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

        getAllPhones()

        return response


    }, [])

    //update phone service
    const updatePhones = useCallback(async (id: string, data: PhonesII) => {

        const service = phonesService()

        const response = await service.updatePhone(id, data)

        getAllPhones()

        return response

    }, [])

    //delete phones service
    const deletePhone = useCallback(async (id: string) =>{

        const service = phonesService()

        const response = await service.deletePhone(id)

        getAllPhones()

        return response

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