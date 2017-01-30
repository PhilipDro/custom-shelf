import { Component, Input } from '@angular/core';

import { Shelf } from './shelf';

@Component({
  moduleId: module.id,
  selector: 'size-form',
  template: `
      <form class="set-measurments">
        <h2>Meine Abmessungen</h2>

        <table class="table">
          <tr>
            <td>Breite:</td>
            <td>
              <input [(ngModel)]="shelf.width" type="number" class="form-control" name="inputWidth" #inputWidth="ngModel" required > cm
              <span [hidden]="inputWidth.valid || inputWidth.pristine" class="alert-simple">X</span>
              <span [hidden]="inputWidth.invalid || inputWidth.pristine" class="tick"><i class="fa fa-check" aria-hidden="true"></i></span>
            </td>
          </tr>
          <tr>
            <td>Tiefe:</td>
            <td>
              <input [(ngModel)]="shelf.depth" type="number" class="form-control" name="input-depth" #inputDepth="ngModel" required> cm
              <span [hidden]="inputDepth.valid || inputDepth.pristine" class="alert-simple">X</span>
              <span [hidden]="inputDepth.invalid || inputDepth.pristine" class="tick"><i class="fa fa-check" aria-hidden="true"></i></span>
            </td>
          </tr>
          <tr>
            <td>Höhe:</td>
            <td>
              <input [(ngModel)]="shelf.height" type="number" class="form-control" name="input-height" #inputHeight="ngModel" required> cm
              <span [hidden]="inputHeight.valid || inputHeight.pristine" class="alert-simple">X</span>
              <span [hidden]="inputHeight.invalid || inputHeight.pristine" class="tick"><i class="fa fa-check" aria-hidden="true"></i></span>
            </td>
          </tr>
        </table>
      </form>
  `,
  styleUrls: ['css/size-form.component.css'],
})

export class SizeFormComponent {
  @Input()
  shelf: Shelf;
  validateSize(size: number) {
    //TODO
  }
}
