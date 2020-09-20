"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validacoes = /** @class */ (function () {
    function Validacoes() {
    }
    Validacoes.validarDataNascimento = function (control) {
        var nascimento = control.value;
        var _a = nascimento.split('-'), ano = _a[0], mes = _a[1], dia = _a[2];
        var hoje = new Date();
        var dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
        var tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...
        if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
            return null;
        return { menorDeIdade: true };
    };
    Validacoes.validarConfirmCamposSenha = function () {
        var validator = function (FormControl) {
            if (!FormControl.root || !FormControl.root.controls)
                return null;
            var field2 = FormControl.root.get('passwords');
            var field = FormControl.root.get('passwords');
            if (!field) {
                return null;
            }
            if (!field2) {
                return null;
            }
            if (field2.get('ConfirmSenha').value !== field.get('senha').value) {
                return { CamposDiferentes: true };
            }
            return null;
        };
        return validator;
    };
    Validacoes.validarConfirmCamposEmail = function () {
        var validator = function (FormControl) {
            if (!FormControl.root || !FormControl.root.controls)
                return null;
            var field2 = FormControl.root.get('emails');
            var field = FormControl.root.get('emails');
            if (!field) {
                return null;
            }
            if (!field2) {
                return null;
            }
            if (field2.get('ConfirmEmail').value !== field.get('email').value) {
                return { CamposDiferentes: true };
            }
            return null;
        };
        return validator;
    };
    return Validacoes;
}());
exports.Validacoes = Validacoes;
//# sourceMappingURL=Validacoes.js.map