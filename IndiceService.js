import { BaseService } from "react-lib"

export default class IndiceService extends BaseService {
    BuscarPorCdIndice(indice) {
        return this.CriarRequisicao("GET", `/indice/porCdIndice/${indice}`);
    }

    BuscarPorCdIndicePeriodo(indice, inicio, fim) {
        var dtInicio = inicio.replace(new RegExp('/', 'g'), '.');
        var dtFim = fim.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicao("GET", `/indice/porCdIndicePeriodo/${indice}/${dtInicio}/${dtFim}`);
    }
}