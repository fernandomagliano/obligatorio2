import { Alimento } from './alimento.js';
import { IngredienteList } from './ingredientelist.js';

export class Menu extends Alimento
{
    #diaDeLaSemana;
    #tipoMenu;
    #listaIngredientes;

    constructor(id, nombre, descripcion, cantCalorias, diaDeLaSemana,tipoMenu,listaIngredientes) {
      super(id, nombre, descripcion, cantCalorias);
      this.#diaDeLaSemana = diaDeLaSemana;
      this.#tipoMenu = tipoMenu;
      this.#listaIngredientes= listaIngredientes;
    }
  
    // Getter y Setter para diaDeLaSemana
    get diaDeLaSemana() {
      return this.#diaDeLaSemana;
    }
    set diaDeLaSemana(value) {
      this.#diaDeLaSemana = value;
    }
  
    // Getter y Setter para tipoMenu
    get tipoMenu() {
      return this.#tipoMenu;
    }
    set tipoMenu(value) {
      this.#tipoMenu = value;
    }

    // Getter y Setter para listaIngredientes
    get listaIngredientes() {
      return this.#listaIngredientes;
    }
    set listaIngredientes(value) {
      this.#listaIngredientes = value;
    }


  
    // Método toString
    toString() {
      return `${super.toString()}\nDía de la semana: ${this.#diaDeLaSemana}\nTipo de menú: ${this.#tipoMenu}`;
    }
  }