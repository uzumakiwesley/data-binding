import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/**
 * String Interpolation: utilizar valores que propriedades
 * possuem para mostra-los para o usuário
 */

/**
 * property bindings utilizar valores de propriedades
 * atribui-los a atributos HTML
 */

/**
 * event binding: utilizado para ouvir eventos do DOM
 * dentro do angulat
 */

/**
 * two way data binding
 */

  title = 'Angular é muito bom!';
  n1: number = 0
  n2: number = 0
  tipoInput: string = 'password'
  somar(x: number, y: number) {
    return x + y
  }

mudarTipoDoInput(): void {
  if (this.tipoInput == 'password') {
    this.tipoInput = 'text'
  } else {
    this.tipoInput = 'password'
  }
}

}
