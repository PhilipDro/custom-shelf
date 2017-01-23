import { Component, Input } from '@angular/core';
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
})

export class ShelfDetailComponent {

  toggleInputParts: string;
  toggleInputWood: string;
  toggleInputColor: string;
  toggleInputDeco: string;
  visible: boolean;

  activeImage: number;
  currentImagePath: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ShelfService
  ) {
    this.toggleInputParts = 'hide-class';
    this.toggleInputWood = 'hide-class';
    this.toggleInputColor = 'hide-class';
    this.toggleInputDeco = 'hide-class';
    this.visible = false;

    this.activeImage = 1;
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
  pickColor(color: string): void {
    this.shelf.color = color;
  }
  pickDeco(deco: string): void {
    this.shelf.deco = deco;
  }
  //pick Kranzleiste
  //TODO pickLeisten

  //subnavigate
  changeImage(image: number) {
    this.activeImage = image;
    this.currentImagePath = 'app/images/' + this.shelf.id + '/' + this.activeImage + '.jpg';
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
  showAddColor() {
    this.visible = !this.visible;
    this.toggleInputColor = this.visible ? 'show-class' : 'hide-class';
  }
  showAddDeco() {
    this.visible = !this.visible;
    this.toggleInputDeco = this.visible ? 'show-class' : 'hide-class';
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
  addColor(choice: string): void {
    this.shelf.color = choice;
    this.calcPrice();
  }
  addDeco(choice: string): void {
    this.shelf.deco = choice;
    this.calcPrice();
  }

  //calculate price
  calcPrice(): void {
    this.shelf.price = this.shelf.priceBefore * (this.shelf.parts / 2)
  }

  @Input() shelf: Shelf;
}
