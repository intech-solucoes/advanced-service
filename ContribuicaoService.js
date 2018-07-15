import { BaseService } from "react-lib"

export default class ContribuicaoService extends BaseService {
    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/contribuicao/porPlano/${plano}`);
    }

}