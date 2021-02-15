import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Usuario } from 'src/app/Entities/Usuario';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewTipousuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    let entidad="usuario"
    this.service.getById(entidad,+id)
    .subscribe(data=>{
      this.usuario=data;
    })
  }

  editarUsuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/editar",id])
  }

  eliminarUusuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/eliminar",id])
  }

  atras() {
    this._location.back();
  }

}
