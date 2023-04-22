import Despesas, { DespesasType } from "../models/Despesas";

export async function getDespesasByUser(idUser: string) {
    return await Despesas.find({ idUser })
}

export async function addDespesa(despesa: DespesasType) {
    return await Despesas.create(despesa)
}

export async function deleteDespesa(_id: string) {
    return await Despesas.findByIdAndDelete({ _id })
}