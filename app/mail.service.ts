import {Component, Injectable}               from '@angular/core';
import {Http, Response}           from '@angular/http';
import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs/Observable';
import {Email}                    from './email';
import 'rxjs/Rx';


@Injectable()
export class MailService {
  constructor( private _http: Http) {}

  private _mailUrl = 'app/mail.php';

  postEmail(newMail: Email): Observable<string>{
    let body = `mail=${newMail.mail}&phone=${newMail.phone}&message=${newMail.message}&parts=${newMail.parts}&width=${newMail.width}&depth=${newMail.depth}&height=${newMail.height}&wood=${newMail.wood}&stain=${newMail.stain}&color=${newMail.color}&deco=${newMail.deco}&ledge=${newMail.ledge}&drawer=${newMail.drawer}&leoDrawers=${newMail.leoDrawers}&slidingDoor=${newMail.slidingDoor}&surface=${newMail.surface}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._mailUrl, body, options)
      .map(res => <string> res.json())
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    alert("still whack");
    console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error du hast verkackt');
  }
}
