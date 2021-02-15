import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tipousuario } from 'src/app/Entities/Tipousuario';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTipoUsuarioComponent implements OnInit {

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
  
  actualizarTipoUsuario() {
    let id=localStorage.getItem("id");
    let entidad="tipousuario"
    let objeto=JSON.stringify(this.tipousuarios);
    console.log(id, entidad, objeto)
    this.service.update(entidad, objeto, id)
    .subscribe(data=>{
      alert("Actualizado con éxito");
      this.router.navigate(["tipousuario/lista"])
    })
  }

  atras() {
    this._location.back();
  }
}
