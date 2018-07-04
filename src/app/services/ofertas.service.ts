import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor() { }

  public getOfertas(): Array<string> {
    let ofertas = [`oferta1`, `oferta2`, `oferta3`];
    return ofertas
  }

}
