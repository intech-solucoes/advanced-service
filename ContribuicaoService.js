import BaseService from "@intechprev/service";

export default class ContribuicaoService extends BaseService {
    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/contribuicao/porPlano/${plano}`);
    }

}