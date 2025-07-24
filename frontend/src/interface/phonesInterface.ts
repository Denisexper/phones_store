
export interface PhonesRequest {
    items : PhonesI[],
}

export interface PhonesI {

    id?: string;
    name: string;
    model : string;
    ram: number;
    storage : number;
    price : number;
    imgUrl : string;

}