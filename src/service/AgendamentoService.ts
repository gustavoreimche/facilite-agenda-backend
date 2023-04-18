import Agendamento, { AgendamentoType } from "../models/Agendamento";

export async function addAgendamento(agendamento: AgendamentoType) {

    return await Agendamento.create(agendamento)
}

export async function getAgendamentos() {
    const agendamentos = await Agendamento.find({})
    return agendamentos;
}

export async function getAgendamentosByUser(idUser: string) {
    const agendamentos = await Agendamento.find(
        { idUser }
    )
    return agendamentos
}

export async function updateAgendamento(_id: string, agendamento: AgendamentoType) {
    let agendamentoTemp = await Agendamento.updateOne({ _id }, {
        nome: agendamento.nome,
        valor: agendamento.valor,
        servico: agendamento.servico,
        formaPag: agendamento.formaPag
    })
    return agendamentoTemp
}

export async function deleteAgendamento(_id: string) {
    return await Agendamento.findByIdAndDelete({ _id })
}

export async function getAgendamentoById(_id: string) {
    return await Agendamento.findOne({ _id })
}