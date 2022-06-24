import { IExpanse } from "../Interfaces/apiInterfaces";

const BASE_URL = 'http://localhost:3001';

export function getExpanses(month: string): Promise<IExpanse[]>{
    return fetch(`${BASE_URL}/despesas?mes=${month}&_sort=dia`).then((resp)=>{
        return resp.json();
    });
}