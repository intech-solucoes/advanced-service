"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLib = require("react-lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContrachequeService = function (_BaseService) {
    _inherits(ContrachequeService, _BaseService);

    function ContrachequeService() {
        _classCallCheck(this, ContrachequeService);

        return _possibleConstructorReturn(this, (ContrachequeService.__proto__ || Object.getPrototypeOf(ContrachequeService)).apply(this, arguments));
    }

    _createClass(ContrachequeService, [{
        key: "BuscarDatasPorPlano",
        value: function BuscarDatasPorPlano(plano) {
            return this.CriarRequisicao("GET", "/contracheque/datasPorPlano/" + plano);
        }
    }, {
        key: "BuscarPorPlano",
        value: function BuscarPorPlano(plano) {
            return this.CriarRequisicao("GET", "/contracheque/porPlano/" + plano);
        }
    }, {
        key: "BuscarPorPlanoCronograma",
        value: function BuscarPorPlanoCronograma(plano, cronograma) {
            return this.CriarRequisicao("GET", "/contracheque/porPlanoCronograma/" + plano + "/" + cronograma);
        }
    }]);

    return ContrachequeService;
}(_reactLib.BaseService);

exports.default = ContrachequeService;