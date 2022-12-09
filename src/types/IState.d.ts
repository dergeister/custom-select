export interface IState {
  id: string,
  sigla: string,
  nome: string,
  regiao: {
    id: string,
    sigla: string,
    nome: string
  }
}