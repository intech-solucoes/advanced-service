'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLib = require('react-lib');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SalarioContribuicaoService = function (_BaseService) {
    _inherits(SalarioContribuicaoService, _BaseService);

    function SalarioContribuicaoService() {
        _classCallCheck(this, SalarioContribuicaoService);

        return _possibleConstructorReturn(this, (SalarioContribuicaoService.__proto__ || Object.getPrototypeOf(SalarioContribuicaoService)).apply(this, arguments));
    }

    _createClass(SalarioContribuicaoService, [{
        key: 'BuscarPorPlanoReferencia',
        value: function BuscarPorPlanoReferencia(plano, referencia) {
            var dtReferencia = referencia.replace(new RegExp('/', 'g'), '.');
            return this.CriarRequisicao("GET", '/salarioContribuicao/porPlanoReferencia/' + plano + '/' + dtReferencia);
        }
    }, {
        key: 'BuscarPorCdIndicePeriodo',
        value: function BuscarPorCdIndicePeriodo(plano, dtInicio, dtFim) {
            var dtInicio = referencia.replace(new RegExp('/', 'g'), '.');
            var fim = dtFim.replace(new RegExp('/', 'g'), '.');
            return this.CriarRequisicao("GET", '/salarioContribuicao/porPlanoPeriodo/' + plano + '/' + inicio + '/' + fim);
        }
    }, {
        key: 'BuscarUltimoPorPlano',
        value: function BuscarUltimoPorPlano(plano) {
            return this.CriarRequisicao("GET", '/salarioContribuicao/ultimoPorPlano/' + plano);
        }
    }]);

    return SalarioContribuicaoService;
}(_reactLib.BaseService);

exports.default = SalarioContribuicaoService;