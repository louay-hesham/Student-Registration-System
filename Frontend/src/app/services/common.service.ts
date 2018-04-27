import { Injectable } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Injectable()
export class CommonService {

  constructor() { }

  public makeSuccessMessage(title: string, text:string = '') {
    swal({
      title: title,
      text: text,
      icon: "success",
    });
  }

  public makeErrorMessage(title: string, text: string) {
    swal({
      title: title,
      text: text,
      icon: "error",
    });
  }  
}
