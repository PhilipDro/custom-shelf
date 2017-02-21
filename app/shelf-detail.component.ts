import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// to process observable route parameters
import 'rxjs/add/operator/switchMap';

import { Shelf } from './shelf';
import { SizeFormComponent } from './size-form.component';
import { ShelfService } from './shelf.service';


@Component({
  moduleId: module.id,
  selector: 'shelf-detail',
  templateUrl: 'shelf-detail.component.html',
  styleUrls: ['css/shelf-detail.component.css'],
  providers: [ShelfService],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({
        opacity: 1,
        transform: 'scale(1.0)'
      })),
      state('false',   style({
        opacity: 0,
        transform: 'scale(0.0)'
      })),
      transition('1 => 0', animate('200ms')),
      transition('0 => 1', animate('200ms'))
    ])
  ]
})

export class ShelfDetailComponent {
  isVisible: boolean = false;

  toggleInputParts: string;
  toggleInputWood: string;
  toggleInputColor: string;
  toggleInputDeco: string;
  toggleInputLedge: string;
  toggleInputStain: string;
  visible: boolean;

  activeImage: string;
  currentImagePath: string;
  srcBackup: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ShelfService
  ) {
    this.toggleInputParts = 'hide-class';
    this.toggleInputWood = 'hide-class';
    this.toggleInputColor = 'hide-class';
    this.toggleInputDeco = 'hide-class';
    this.toggleInputLedge = 'hide-class';
    this.toggleInputStain = 'hide-class';
    this.visible = false;

    this.activeImage = '1';
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getShelf(+params['id']))
      .subscribe((shelf: Shelf) => this.shelf = shelf);
  }


  //pick customization
  pickParts(part: number): void {
    this.shelf.parts = part;
  }
  pickWood(wood: string): void {
    this.shelf.wood = wood;
  }
  pickStain(stain: string): void {
    this.shelf.stain = stain;
  }
  pickColor(color: string): void {
    this.shelf.color = color;
  }
  pickDeco(deco: string): void {
    this.shelf.deco = deco;
  }
  pickLedge(ledge: string): void {
    this.shelf.ledge = ledge;
  }

  //subnavigate
  changeImage(image: string) {
    this.srcBackup = this.activeImage;
    this.activeImage = image;

    if(this.isNumeric(image)) {
      this.currentImagePath = 'app/images/' + this.shelf.id + '/' + this.activeImage + '.jpg';
    }
    else {
      this.currentImagePath = 'app/images/hovers/' + this.activeImage + '.jpg';
    }

  }
  changeState(state: number): void {
    this.shelf.state = state;
  }

  //show input for adding choices
  showAddParts() {
    this.visible = !this.visible;
    this.toggleInputParts = this.visible ? 'show-class' : 'hide-class';
  }
  showAddWood() {
    this.visible = !this.visible;
    this.toggleInputWood = this.visible ? 'show-class' : 'hide-class';
  }
  showAddStain() {
    this.visible = !this.visible;
    this.toggleInputStain = this.visible ? 'show-class' : 'hide-class';
  }
  showAddColor() {
    this.visible = !this.visible;
    this.toggleInputColor = this.visible ? 'show-class' : 'hide-class';
  }
  showAddDeco() {
    this.visible = !this.visible;
    this.toggleInputDeco = this.visible ? 'show-class' : 'hide-class';
  }
  showAddLedge() {
    this.visible = !this.visible;
    this.toggleInputLedge = this.visible ? 'show-class' : 'hide-class';
  }

  //add a choice
  addParts(choice: number): void {
    this.shelf.parts = choice;
    this.calcPrice();
  }
  addWood(choice: string): void {
    this.shelf.wood = choice;
    this.calcPrice();
  }
  addStain(choice: string): void {
    this.shelf.stain = choice;
    this.calcPrice();
  }
  addColor(choice: string): void {
    this.shelf.color = choice;
    this.calcPrice();
  }
  addDeco(choice: string): void {
    this.shelf.deco = choice;
    this.calcPrice();
  }
  addLedge(choice: string): void {
    this.shelf.ledge = choice;
    this.calcPrice();
  }


  //calculate price
  calcPrice(): void {
    this.shelf.price = this.shelf.priceBefore * (this.shelf.parts / 2)
  }

  //custom functions
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }



  @Input() shelf: Shelf;
}
