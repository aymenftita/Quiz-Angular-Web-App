import { Component, OnInit } from '@angular/core';
import { ScoreServiceService } from './service/score-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newBackTest';
  constructor(private scoreservice: ScoreServiceService){}
  ngOnInit(): void {
    this.scoreservice.getResponse("hi").subscribe(response=>console.log(response));
  }
}
