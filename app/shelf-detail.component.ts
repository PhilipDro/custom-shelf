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

export class ShelfDetailComponent{
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
    private service: ShelfService,
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
    if(wood=='erle') {
      this.pickColor(null);
    }
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
  pickSurface(surface: string): void {
    this.shelf.surface = surface;
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

  calcPrice(): void {
    var wood = this.shelf.wood;
    switch (wood) {
       case "erle": {
          var mWood = 1;
          break;
       }
       case "kiefer": {
          var mWood = 1;
          break;
       }
       case "buche": {
          var mWood = 1.2;
          break;
       }
       case "eiche": {
          var mWood = 1.4;
          break;
       }
       case "kirsche": {
          var mWood = 1.9;
          break;
       }
       case "nussbaum": {
          var mWood = 1.9;
          break;
       }
       default: {
          var mWood = 1;
          break;
       }
    }
    var deco = this.shelf.deco;
    switch (deco) {
       case null: {
          var mDeco = 1;
          break;
       }
       case "deco a": {
          var mDeco = 1.04;
          break;
       }
       case "deco b": {
          var mDeco = 1.04;
          break;
       }
       default: {
          var mDeco = 1;
          break;
       }
    }
    var ledge = this.shelf.ledge;
    switch (ledge) {
       case null: {
          var mLedge = 1;
          break;
       }
       case "ledge a": {
          var mLedge = 1.04;
          break;
       }
       case "ledge b": {
          var mLedge = 1.04;
          break;
       }
       default: {
          var mLedge = 1;
          break;
       }
    }

    if(this.shelf.color != null) {
      var mColor = 1.1;
    }
    else {
      var mColor = 1;
    }

    if(this.shelf.surface == 'geölt + gewachst') {
      var mSurface = 1;
    }
    else {
      var mSurface = 1.1;
    }

    if(this.shelf.drawer != null) {
      var aDrawer = (150 * this.shelf.drawer) * this.shelf.parts;
    }
    else {
      var aDrawer = 0;
    }

    if(this.shelf.leoDrawers != null) {
      var aLeoDrawers = 400 * this.shelf.leoDrawers;
    }
    else {
      var aLeoDrawers = 0;
    }

    if(this.shelf.slidingDoor != null) {
      var aSlidingDoor = 300 * this.shelf.slidingDoor;
    }
    else {
      var aSlidingDoor = 0;
    }

    var object = this.shelf.id;
    switch (object) {
       case 1: {
          var mObject = 1;
          break;
       }
       case 2: { // sacleff
          var mObject = 1.53;
          break;
       }
       case 3: { // lango m
          var mObject = 1.28;
          break;
       }
       case 4: { //setzregal
          var mObject = 1.41;

          var shelfPriceBefore = this.shelf.price;
          var aParts = this.shelf.parts * shelfPriceBefore - shelfPriceBefore;
          break;
       }
       case 5: { // herrmann
          var mObject = 1.34;
          break;
       }
       case 6: {
          var mObject = 1;
          break;
       }
       default: {
          var mObject = 1;
          break;
       }
    }

    var priceForPart = 600
    if(this.shelf.parts > 1) {
      var aParts = this.shelf.parts * priceForPart - priceForPart;
    }
    else {
      aParts = 0;
    }

    var widthPrice = ((this.shelf.width - 80) * 5)/ this.shelf.parts;
    var heightPrice = ((this.shelf.height - 220) * 2.5)/ this.shelf.parts;

    var base = 600;

    this.shelf.price =
      mWood * mDeco * mLedge * mColor * mSurface * mObject * base +
      aParts + heightPrice + widthPrice +
      aDrawer + aLeoDrawers + aSlidingDoor;
  }


  //custom functions
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  @Input() shelf: Shelf;
}
