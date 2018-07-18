"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLib = require("react-lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaldoService = function (_BaseService) {
    _inherits(SaldoService, _BaseService);

    function SaldoService() {
        _classCallCheck(this, SaldoService);

        return _possibleConstructorReturn(this, (SaldoService.__proto__ || Object.getPrototypeOf(SaldoService)).apply(this, arguments));
    }

    _createClass(SaldoService, [{
        key: "BuscarSaldoBD",
        value: function BuscarSaldoBD() {
            return this.CriarRequisicao("GET", "/saldo/saldoBD/");
        }
    }, {
        key: "BuscarSaldoCD",
        value: function BuscarSaldoCD() {
            return this.CriarRequisicao("GET", "/saldo/saldoCD/");
        }
    }]);

    return SaldoService;
}(_reactLib.BaseService);

exports.default = SaldoService;