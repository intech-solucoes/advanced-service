import BaseService from "@intechprev/service";

export default class DadosPessoaisService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/dadosPessoais");
    }

}