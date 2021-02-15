import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tipousuario } from 'src/app/Entities/Tipousuario';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class NewTipoUsuarioComponent implements OnInit {

  tipousuarios: Tipousuario = new Tipousuario();
  entidad="tipousuario";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarTipoUsuario();
  }

  editarTipoUsuario() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.tipousuarios=data;
    })
  }

  nuevoTipoUsuario(tipousuario: Tipousuario) {
    let id=localStorage.getItem("id");
    this.service.add(this.entidad, +id)
      .subscribe(data => {
        alert("Tipo de usuario creado con éxito");
        this.router.navigate(["tipousuario/lista"])
      })
  }

  atras() {
    this._location.back();
  }
