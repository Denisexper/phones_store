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
    }
}