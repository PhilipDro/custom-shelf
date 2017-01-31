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
      border-color: rgb(204, 204, 204);
    }
    table tr > td::first-letter {
      text-transform: uppercase;
    }

  `],
  providers: [HttpModule, MailService]
})

export class MailComponent implements OnInit{
  @Input()
  shelf: Shelf;
  constructor(private _mailService: MailService) { }
  ngOnInit() { }

  public message: Email = {mail: '', phone: '', message: ''};

  onSubmit() {
    this._mailService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response) {
    if(response.status == 'success') {
      this.message = {mail: '', phone: '', message: ''};
      alert('Danke für deine Nachricht');
    }
    if(response.status == 'error') {
      alert('Nicht geklappt');
    }
  }

}
