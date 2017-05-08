import { Component, Input, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgForm} from '@angular/forms';

import { Email } from './email';
import { MailService } from './mail.service';
import { Shelf } from './shelf';

@Component({
  moduleId: module.id,
  selector: 'mail',
  templateUrl: 'mail.component.html',
  styles: [`
    textarea {
      width:100%;
      font-size: 14px;
      border: 1px solid rgb(204, 204, 204);
      margin-bottom: 15px;
    }
    table tr > td::first-letter {
      text-transform: uppercase;
    }

    .confirmation-message {
      visibility: hidden;
      color: green;
    }
    .tick-sent {
      margin-right: 14px;
      position: static;
      visibility: hidden;
    }
    .sent {
      visibility: visible !important;
    }

  `],
  providers: [HttpModule, MailService]
})

export class MailComponent implements OnInit{
  @Input()
  shelf: Shelf;
  messageSent = false;
  constructor(private _mailService: MailService) { }
  ngOnInit() { }

  public message: Email = {
    mail: '',
    phone: '',
    message: '',
    parts: 2,
    width: 0,
    depth: 0,
    height: 0,
    wood: '',
    stain: '',
    color: '',
    deco: '',
    ledge: '',
    drawer: 0,
    leoDrawers: 0,
    slidingDoor: 0,
    surface: '',
  };

  onSubmit() {
    this.message.parts = this.shelf.parts;
    this.message.width = this.shelf.width;
    this.message.depth = this.shelf.depth;
    this.message.height = this.shelf.height;
    this.message.wood = this.shelf.wood;
    this.message.stain = this.shelf.stain;
    this.message.color = this.shelf.color;
    this.message.deco = this.shelf.deco;
    this.message.ledge = this.shelf.ledge;
    this.message.drawer = this.shelf.drawer;
    this.message.leoDrawers = this.shelf.leoDrawers;
    this.message.slidingDoor = this.shelf.slidingDoor;
    this.message.surface = this.shelf.surface;

    this._mailService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response) {
    if(response.status == 'success') {
      this.message = {
        mail: '',
        phone: '',
        message: '',
        parts: 0,
        width: 0,
        depth: 0,
        height: 0,
        wood: '',
        stain: '',
        color: '',
        deco: '',
        ledge: '',
        drawer: 0,
        leoDrawers: 0,
        slidingDoor: 0,
        surface: '',
      };
      this.messageSent = true;
    }
    if(response.status == 'error') {
      alert('Nicht geklappt');
    }
  }

}
