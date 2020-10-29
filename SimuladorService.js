import BaseService from "@intechprev/service";

export default class SimuladorService extends BaseService {
    BuscarDadosSimuladorBD() {
        return this.CriarRequisicao("GET", `/simuladorBD`);
    }

    SimularBD() {
        return this.CriarRequisicao("GET", `/simuladorBD/simular`);
    }

    BuscarDadosSimuladorCD(sqPlanoPrevidencial) {
        return this.CriarRequisicao("GET", `/simuladorCD/${sqPlanoPrevidencial}`);
    }

    BuscarDadosSimuladorCDPasso2(sqPlanoPrevidencial) {
        return this.CriarRequisicao("GET", `/simuladorCD/passo2/${sqPlanoPrevidencial}`);
    }

    SimularCD(sqPlanoPrevidencial, contribBasica, contribFacultativa, idadeAposentadoria, saque) {
        return this.CriarRequisicao("POST", `/simuladorCD/simular/${sqPlanoPrevidencial}`, { contribBasica, contribFacultativa, idadeAposentadoria, saque });
    }

    SimularNaoParticipante(Nome, Email, ContribBasica, ContribFacultativa, AporteInicial, IdadeAposentadoria, Saque, DataNascimento, Sexo, NascimentoConjugue, 
        NascimentoFilhoInvalido, SexoFilhoInvalido, NascimentoFilhoMaisNovo, SexoFilhoMaisNovo, TaxaJuros) {
        return this.CriarRequisicao("POST", `/simuladorCD/simularNaoParticipante`, { Nome, Email, ContribBasica, ContribFacultativa, AporteInicial,
            IdadeAposentadoria, Saque, DataNascimento, Sexo, NascimentoConjugue, NascimentoFilhoInvalido, SexoFilhoInvalido, NascimentoFilhoMaisNovo, SexoFilhoMaisNovo, TaxaJuros });
    }

    Aderir(nome, email) {
        return this.CriarRequisicao("POST", `/simuladorCD/aderir`, { nome, email });
    }
}