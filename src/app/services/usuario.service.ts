import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public afs: AngularFirestore) { }

  saveUsuario(usuario: Usuario) {
    const refUsuario = this.afs.collection("usuarios");
    if (usuario.uid == null) {
      usuario.uid = this.afs.createId();
      usuario.delete = false;
    }

    refUsuario.doc(usuario.uid).set(Object.assign({}, usuario), { merge: true })


  }
  getUsuarios(): Observable<any[]>{
    return this.afs.collection("usuarios",
            ref => ref.where("delete", "==", false)).valueChanges();
  }

 
  getUsuarioById2(uid: string) :Observable<any>{
    return this.afs.collection("usuarios", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges();
  }
  
  borrarContacto(uid: string){
    const refContacto = this.afs.collection("usuarios");
    
    const aux = {delete: true};
    refContacto.doc(uid).set( {...aux}, { merge: true})
  }








}
