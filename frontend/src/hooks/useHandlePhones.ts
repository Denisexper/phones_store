import { useCallback, useEffect, useState } from "react"
import { phonesService } from "../services/api/phones.service"
import type { PhonesI } from "../interface/phonesInterface"




export const useHandlePhones = () => {

    const [ phones, setPhones ] = useState<PhonesI[]>([])

    const getAllPhones = useCallback(async () => {

        const service = phonesService()

        const dataPhones = await service.getAllPhones()

        console.log("dataPhones:", dataPhones);

        setPhones(dataPhones.items)

    }, []);

    useEffect (() => {

        getAllPhones();
    }, [])

    return {
        phones,
    }
}