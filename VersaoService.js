import { BaseService } from "react-lib"

export default class VersaoService extends BaseService {
    Verificar() {
        return this.CriarRequisicao("GET", "/");
    }
}