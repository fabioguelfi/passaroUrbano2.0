import { Oferta } from "./../models/oferta.model";
import { OfertasService } from "./../services/ofertas.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas);
  }
}
