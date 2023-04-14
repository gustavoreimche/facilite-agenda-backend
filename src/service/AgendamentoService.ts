import Agendamento, { AgendamentoType } from "../models/Agendamento";

export async function addAgendamento(agendamento: AgendamentoType) {
    await Agendamento.create(agendamento)
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

export async function updateAgendamento(id: string, agendamento: AgendamentoType) {
    let agendamentoTemp = await Agendamento.findOne({ _id: id })
    if (agendamentoTemp != null) {
        agendamentoTemp.nome = agendamento.nome;
        agendamentoTemp.valor = agendamento.valor;
        agendamentoTemp.servico = agendamento.servico;
        agendamentoTemp.date = agendamento.date;
        agendamentoTemp.formaPag = agendamento.formaPag;
        agendamentoTemp.hora = agendamento.hora;

        await agendamentoTemp.save();
    }
}

export async function deleteAgendamento(id: string) {
    return await Agendamento.findByIdAndDelete({ _id: id })
}