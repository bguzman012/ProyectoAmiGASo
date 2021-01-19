import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  datos: Usuario = new Usuario();
  uid: string;
  

  constructor(private route: ActivatedRoute, 
    private router: Router,
    public usuarioService: UsuarioService) { 
      this.uid = this.route.snapshot.paramMap.get('uid');
      this.usuarioService.getUsuarioById2(this.uid).subscribe(data => {
        console.log(data)
        const aux:any = data
        this.datos = aux[0];
    });

      
      
  }

  ngOnInit() {

  }

  guardar(){
    console.log(this.datos)
    this.usuarioService.saveUsuario(this.datos);
    
    
  }

}
