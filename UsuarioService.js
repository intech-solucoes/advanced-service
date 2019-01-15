import BaseService from "@intechprev/service";

export default class UsuarioService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/usuario");
    }

    Login(cpf, senha) {
        return this.CriarRequisicao("POST", "/usuario/login", { Cpf: cpf, Senha: senha });
    }

}