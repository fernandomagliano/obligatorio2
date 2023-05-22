export class Alimento
{
    #id;
    #nombre;
    #descripcion;
    #cantCalorias;
    
       constructor(id, nombre, descripcion, cantCalorias) 
        {
        this.#id = id;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#cantCalorias = cantCalorias;
        }
    
      // Getter y Setter para id
      get id() {
        return this.#id;
      }
      set id(value) {
        this.#id = value;
      }
    
      // Getter y Setter para nombre
      get nombre() {
        return this.#nombre;
      }
      set nombre(value) {
        this.#nombre = value;
      }
    
      // Getter y Setter para descripcion
      get descripcion() {
        return this.#descripcion;
      }
      set descripcion(value) {
        this.#descripcion = value;
      }
  
    
      // Getter y Setter para cantCalorias
      get cantCalorias() {
        return this.#cantCalorias;
      }
      set cantCalorias(value) {
        this.#cantCalorias = value;
      }


      toString() {
        return `Nombre: ${this.#nombre}\nDescripción: ${this.#descripcion}\nCantidad de calorías: ${this.#cantCalorias}`;
      }

}