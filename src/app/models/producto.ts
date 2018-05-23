export class Producto {
  constructor(
    public referencia: string,
    public nombre: string,
    public precio: number,
    public categoria: string,
    public marca: string,
    public imageUrl: string,
    public destacado: boolean,
  ) { }
}