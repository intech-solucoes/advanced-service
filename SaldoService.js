import BaseService from "@intechprev/service";

export default class SaldoService extends BaseService {
    BuscarSaldoBD() {
        return this.CriarRequisicao("GET", `/saldo/saldoBD/`);
    }

    BuscarSaldoCD() {
        return this.CriarRequisicao("GET", `/saldo/saldoCD/`);
    }
}