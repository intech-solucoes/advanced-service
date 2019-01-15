import BaseService from "@intechprev/service";

export default class VersaoService extends BaseService {
    Verificar() {
        return this.CriarRequisicao("GET", "/");
    }
}