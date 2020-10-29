import BaseService from "@intechprev/service";

export default class UsuarioService extends BaseService {
    Buscar(versao = null) {
        return this.CriarRequisicao("GET", "/usuario");
    }

    Login(cpf, senha) {
        return this.CriarRequisicao("POST", "/usuario/login", { Cpf: cpf, Senha: senha });
    }

    LoginV2(cpf, senha) {
        return this.CriarRequisicao("POST", "/usuario/v2/login", { Cpf: cpf, Senha: senha });
    }

    LoginV3(cpf, senha) {
        return this.CriarRequisicao("POST", "/usuario/v3/login", { Cpf: cpf, Senha: senha });
    }

    BuscarMatriculas() {
        return this.CriarRequisicao("GET", "/usuario/buscarMatriculas");
    }

    SelecionarMatricula(matricula) {
        return this.CriarRequisicao("GET", `/usuario/selecionarMatricula/${matricula}`)
    }
}