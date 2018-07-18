"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLib = require("react-lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlanoVinculadoService = function (_BaseService) {
    _inherits(PlanoVinculadoService, _BaseService);

    function PlanoVinculadoService() {
        _classCallCheck(this, PlanoVinculadoService);

        return _possibleConstructorReturn(this, (PlanoVinculadoService.__proto__ || Object.getPrototypeOf(PlanoVinculadoService)).apply(this, arguments));
    }

    _createClass(PlanoVinculadoService, [{
        key: "Buscar",
        value: function Buscar() {
            return this.CriarRequisicao("GET", "/planoVinculado");
        }
    }, {
        key: "BuscarPorPlano",
        value: function BuscarPorPlano(plano) {
            return this.CriarRequisicao("GET", "/planoVinculado/porPlano/" + plano);
        }
    }]);

    return PlanoVinculadoService;
}(_reactLib.BaseService);

exports.default = PlanoVinculadoService;