import BaseService from "@intechprev/service";

export default class PlanoVinculadoService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/planoVinculado");
    }

    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/planoVinculado/porPlano/${plano}`);
    }

}