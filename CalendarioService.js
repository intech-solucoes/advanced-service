import BaseService from "@intechprev/service";

export default class CalendarioService extends BaseService {
    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/calendario/BuscarPorPlano/${plano}`);
    }
}