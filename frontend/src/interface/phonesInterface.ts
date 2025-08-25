
//para crear un nuevo telefono  no necesitamos id
export interface PhonesI {
    name: string;
    model : string;
    ram?: number;
    storage?: number;
    price : number;
    imgUrl : string;

}

// Para teléfonos que ya existen en la DB (con _id)
export interface PhonesII {
    _id: string;
    name: string;
    model: string;
    price: number;
    imgUrl: string;
    ram?: number;
    storage?: number;
}