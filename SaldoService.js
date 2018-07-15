import { BaseService } from "react-lib"

export default class SaldoService extends BaseService {
    BuscarBrutoPorPlanoDataReferencia(plano, referencia) {
        var dataReferencia = referencia.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicao("GET", `/saldo/brutoPorPlanoDataReferencia/${plano}/${dataReferencia}`);
    }

    BuscarIndividualPorPlanoTipoDataReferencia(plano, tipo, referencia) {
        var dataReferencia = referencia.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicao("GET", `/saldo/individualPorPlanoIrTipoDataReferencia/${plano}/${tipo}/${dataReferencia}`);
    }

    BuscarSaldoBD(plano, referencia) {
        var dataReferencia = referencia.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicao("GET", `/saldo/saldoBD/${plano}/${dataReferencia}`);
    }
}