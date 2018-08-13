import { BaseService } from "@intechprev/react-lib"

export default class ContrachequeService extends BaseService {
    BuscarDatasPorPlano(plano) {
        return this.CriarRequisicao("GET", `/contracheque/datasPorPlano/${plano}`);
    }

    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/contracheque/porPlano/${plano}`);
    }

    BuscarPorPlanoCronograma(plano, cronograma) {
        return this.CriarRequisicao("GET", `/contracheque/porPlanoCronograma/${plano}/${cronograma}`);
    }
}