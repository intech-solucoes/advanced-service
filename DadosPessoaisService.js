import { BaseService } from "react-lib"

export default class DadosPessoaisService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/dadosPessoais");
    }

}