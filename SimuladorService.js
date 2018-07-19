import { BaseService } from "react-lib"

export default class SimuladorService extends BaseService {
    BuscarDadosSimuladorBD(plano) {
        return this.CriarRequisicao("GET", `/simuladorBD/${plano}`);
    }

    SimularBD(plano) {
        return this.CriarRequisicao("GET", `/simuladorBD/${plano}/simular`);
    }

    BuscarDadosSimuladorCD(plano) {
        return this.CriarRequisicao("GET", `/simuladorCD/${plano}`);
    }

    BuscarDadosSimuladorCDPasso2(plano) {
        return this.CriarRequisicao("GET", `/simuladorCD/${plano}/passo2`);
    }

    SimularCD(plano, contribBasica, contribFacultativa, idadeAposentadoria) {
        return this.CriarRequisicao("POST", `/simuladorCD/${plano}/simular`, { contribBasica, contribFacultativa, idadeAposentadoria });
    }
}