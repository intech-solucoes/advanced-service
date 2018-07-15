import { BaseService } from "react-lib"

export default class SalarioContribuicaoService extends BaseService {
    BuscarPorPlanoReferencia(plano, referencia) {
        var dtReferencia = referencia.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicao("GET", `/salarioContribuicao/porPlanoReferencia/${plano}/${dtReferencia}`);
    }

    BuscarPorCdIndicePeriodo(plano, dtInicio, dtFim) {
        var dtInicio = referencia.replace(new RegExp('/', 'g'), '.');
        var fim = dtFim.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicao("GET", `/salarioContribuicao/porPlanoPeriodo/${plano}/${inicio}/${fim}`);
    }

    BuscarUltimoPorPlano(plano) {
        return this.CriarRequisicao("GET", `/salarioContribuicao/ultimoPorPlano/${plano}`);
    }
}