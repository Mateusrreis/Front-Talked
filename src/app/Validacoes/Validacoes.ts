import { AbstractControl,FormGroup, FormControl } from "@angular/forms";


export class Validacoes {

  static validarDataNascimento(control: AbstractControl) {
    const nascimento = control.value;
    const [ano, mes, dia] = nascimento.split('-');
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
      return null;

    return { menorDeIdade: true };
  }

  static validarConfirmCamposSenha() {
    const validator = (FormControl: FormControl) => {

      if (!FormControl.root || !(<FormGroup>FormControl.root).controls)
        return null;

      const field2 = (<FormGroup>FormControl.root).get('passwords');
      const field = (<FormGroup>FormControl.root).get('passwords');

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
    }
    return validator;
  }

  static validarConfirmCamposEmail() {
    const validator = (FormControl: FormControl) => {
    
      if (!FormControl.root || !(<FormGroup>FormControl.root).controls)
        return null;

      const field2 = (<FormGroup>FormControl.root).get('emails');
      const field = (<FormGroup>FormControl.root).get('emails');

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
    }
    return validator;
  }



}
