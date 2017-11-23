import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import { IContact } from './icontact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServiceService]
})
export class AppComponent implements OnInit {
  title = 'app';
_postArray: IContact[];

constructor(private apiservice: ApiServiceService) {
 }

getPosts(): void {
  this.apiservice.getPosts()
  .subscribe(
    resultArray => this._postArray = resultArray,
    error => console.log('Error' + error)
  );
}


ngOnInit(): void {
 this.getPosts();
}

}
