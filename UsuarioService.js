import BaseService from "@intechprev/service";

export default class UsuarioService extends BaseService {
    Buscar(versao = null) {
        return this.CriarRequisicao("GET", this.MontarRota("usuario", versao));
    }

    Login(cpf, senha, versao = null) {
        return this.CriarRequisicao("POST", this.MontarRota("usuario", versao, "login"), { Cpf: cpf, Senha: senha });
    }
}