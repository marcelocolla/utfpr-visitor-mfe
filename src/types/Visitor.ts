type PessoaType = {
  nome_pessoa: string
}

interface AlunoType {
  id_aluno: number
  id_pessoa: number
  ra_aluno: string
  Pessoa: PessoaType
}

export interface VisitorModel {
  id_visita: number
  id_vigilante_entrada: number
  id_vigilante_saida?: string
  hora_entrada?: string
  hora_saida?: string
  data_entrada?: string
  data_saida?: string
  placa_veiculo: string
  nome_pessoa?: string
  observacoes?: string
  liberacao?: {
    id_liberacao: string
    Aluno: AlunoType
  }
}

export interface VisitorValues {
  id_visita: number
  id_liberacao: string
  id_vigilante: string
  nome_pessoa: string
  ra_aluno: string
  data_saida: string
  hora_saida: string
  placa_veiculo: string
  observacoes: string
}
