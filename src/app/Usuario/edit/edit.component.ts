import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entities/Usuario';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuarios: Usuario = new Usuario();
  entidad="usuario";
  constructor(private router:Router, private service: ServiceService, private _location: Location) { }

  ngOnInit(): void {
    this.editarUsuario();
  }

  editarUsuario() {
    let id=localStorage.getItem("id");
    this.service.getById(this.entidad, +id)
    .subscribe(data=>{
      this.usuarios=data;
    })
  }

  actualizarUsuario(usuario: Usuario) {
    let id=localStorage.getItem("id");
    let objeto=JSON.stringify(this.usuarios);
    this.service.update(this.entidad, objeto,+id)
      .subscribe(data => {
        alert("Usuario editado con éxito");
        this.router.navigate(["usuario/lista"])
      })
  }

  atras() {
    this._location.back();
  }

}
}
