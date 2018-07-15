import { BaseService } from "react-lib"

export default class PlanoVinculadoService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/planoVinculado");
    }

}