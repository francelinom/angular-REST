import { Telefone } from './telefone';
export class User {
  id?: number;
  login?: string;
  nome?: string;
  senha?: string;
  cpf?: string;
  cep?: string;

  telefones?: Array<Telefone>;
}
