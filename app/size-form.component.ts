import { Component, Input } from '@angular/core';

import { Shelf } from './shelf';

@Component({
  // moduleId: module.id,
  selector: 'size-form',
  template: `
      <form class="set-measurments">
        <h2>Meine Abmessungen</h2>

        <table class="table">
          <tr>
            <td class="first-td">Breite:</td>
            <td class="second-td">
              <input [(ngModel)]="shelf.width" type="number" min="0" class="form-control" name="inputWidth" #inputWidth="ngModel" (mouseup)="validateSize()" (keyup)="validateSize()" required > cm
              <span [ngClass]="outputStatus" class="per-segment">{{warning || perSegmentWidthText || ""}} </span>
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
  styleUrls: ['app/css/size-form.component.css'],
})

export class SizeFormComponent {
  @Input()
  shelf: Shelf;
  tooWidth = false;
  warning: any;
  outOfRange: boolean = false;
  perSegmentWidth: number;
  perSegmentWidthText: string;
  outputStatus: string = 'no-warning';

  validateSize(size: number) {
    this.perSegmentWidth = Math.round(this.shelf.width / this.shelf.parts);
    this.perSegmentWidthText = this.perSegmentWidth + " cm pro Segment";
    // if it is out of range
    if(this.perSegmentWidth > 110 || this.perSegmentWidth < 60) {
      this.warning = "60 bis 110 cm pro Segment!";
      this.outputStatus = 'warning';
      this.outOfRange = true;
    }
    // if it is in range
    else {
      this.warning = false;
      this.outputStatus = 'no-warning';
      this.outOfRange = false;
    }
  }

}
