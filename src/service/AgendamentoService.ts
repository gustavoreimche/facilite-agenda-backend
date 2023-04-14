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
    let agendamentoTemp = await Agendamento.findOne({ _id })
    if (agendamentoTemp) {
        agendamentoTemp.nome = agendamento.nome;
        agendamentoTemp.valor = agendamento.valor;
        agendamentoTemp.servico = agendamento.servico;
        agendamentoTemp.date = agendamento.date;
        agendamentoTemp.formaPag = agendamento.formaPag;
        agendamentoTemp.hora = agendamento.hora;

        await agendamentoTemp.save();
        return agendamentoTemp;
    }
}

export async function deleteAgendamento(_id: string) {
    return await Agendamento.findByIdAndDelete({ _id })
}