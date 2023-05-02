import Entradas, { EntradasType } from "../models/Entradas";

export async function getDespesasByUser(idUser: string) {
    return await Entradas.find({ idUser })
}

export async function addDespesa(despesa: EntradasType) {
    return await Entradas.create(despesa)
}

export async function deleteDespesa(_id: string) {
    return await Entradas.findByIdAndDelete({ _id })
}
