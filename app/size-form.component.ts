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
              <input [(ngModel)]="shelf.width" type="number" min="0" class="form-control" name="inputWidth" #inputWidth="ngModel" (change)="validateSize()" required > cm
              <span class="per-segment">{{warning || shelf.width/shelf.parts + " cm pro Segment"}} </span>
              <span [hidden]="inputWidth.valid || inputWidth.pristine" class="alert-simple">X</span>
              <span *ngIf="outOfRange" class="alert-simple">X</span>
              <span [hidden]="inputWidth.invalid || inputWidth.pristine || outOfRange" class="tick"><i class="fa fa-check" aria-hidden="true"></i></span>
            </td>
          </tr>
          <tr>
            <td>Tiefe:</td>
            <td>
              <input [(ngModel)]="shelf.depth" type="number" min="0" class="form-control" name="input-depth" #inputDepth="ngModel" required> cm
              <span [hidden]="inputDepth.valid || inputDepth.pristine" class="alert-simple">X</span>
              <span [hidden]="inputDepth.invalid || inputDepth.pristine" class="tick"><i class="fa fa-check" aria-hidden="true"></i></span>
            </td>
          </tr>
          <tr>
            <td>Höhe:</td>
            <td>
              <input [(ngModel)]="shelf.height" type="number" min="0" class="form-control" name="input-height" #inputHeight="ngModel" required> cm
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
  tooWidth = false;
  warning: any;
  outOfRange: boolean = false;

  validateSize(size: number) {
    var perSegmentWidth = this.shelf.width / this.shelf.parts;
    // if it is out of range
    if(perSegmentWidth > 110 || perSegmentWidth < 60) {
      this.warning = "60 bis 110 cm pro Segment!";
      this.outOfRange = true;
    }
    // if it is in range
    else {
      this.warning = false;
      this.outOfRange = false;
    }
  }

}
