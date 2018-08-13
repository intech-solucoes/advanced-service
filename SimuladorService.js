import { BaseService } from "@intechprev/react-lib"

export default class SimuladorService extends BaseService {
    BuscarDadosSimuladorBD() {
        return this.CriarRequisicao("GET", `/simuladorBD`);
    }

    SimularBD() {
        return this.CriarRequisicao("GET", `/simuladorBD/simular`);
    }

    BuscarDadosSimuladorCD() {
        return this.CriarRequisicao("GET", `/simuladorCD`);
    }

    BuscarDadosSimuladorCDPasso2() {
        return this.CriarRequisicao("GET", `/simuladorCD/passo2`);
    }

    SimularCD(contribBasica, contribFacultativa, idadeAposentadoria, saque) {
        return this.CriarRequisicao("POST", `/simuladorCD/simular`, { contribBasica, contribFacultativa, idadeAposentadoria, saque });
    }
}