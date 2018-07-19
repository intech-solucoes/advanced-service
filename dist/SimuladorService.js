"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLib = require("react-lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimuladorService = function (_BaseService) {
    _inherits(SimuladorService, _BaseService);

    function SimuladorService() {
        _classCallCheck(this, SimuladorService);

        return _possibleConstructorReturn(this, (SimuladorService.__proto__ || Object.getPrototypeOf(SimuladorService)).apply(this, arguments));
    }

    _createClass(SimuladorService, [{
        key: "BuscarDadosSimuladorBD",
        value: function BuscarDadosSimuladorBD(plano) {
            return this.CriarRequisicao("GET", "/simuladorBD/" + plano);
        }
    }, {
        key: "SimularBD",
        value: function SimularBD(plano) {
            return this.CriarRequisicao("GET", "/simuladorBD/" + plano + "/simular");
        }
    }, {
        key: "BuscarDadosSimuladorCD",
        value: function BuscarDadosSimuladorCD(plano) {
            return this.CriarRequisicao("GET", "/simuladorCD/" + plano);
        }
    }, {
        key: "BuscarDadosSimuladorCDPasso2",
        value: function BuscarDadosSimuladorCDPasso2(plano) {
            return this.CriarRequisicao("GET", "/simuladorCD/" + plano + "/passo2");
        }
    }, {
        key: "SimularCD",
        value: function SimularCD(plano, contribBasica, contribFacultativa, idadeAposentadoria) {
            return this.CriarRequisicao("POST", "/simuladorCD/" + plano + "/simular", { contribBasica: contribBasica, contribFacultativa: contribFacultativa, idadeAposentadoria: idadeAposentadoria });
        }
    }]);

    return SimuladorService;
}(_reactLib.BaseService);

exports.default = SimuladorService;