import BaseService from "@intechprev/service";

export default class NoticiaService extends BaseService {
    BuscarPorPagina(pagina) {
        return this.CriarRequisicao("GET", `/noticia/porPagina/${pagina}`);
    }
    BuscarPorOid(oid) {
        return this.CriarRequisicao("GET", `/noticia/porOid/${oid}`);
    }
}