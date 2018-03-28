import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singlemail',
  templateUrl: './singlemail.component.html',
  styleUrls: ['./singlemail.component.css']
})
export class SinglemailComponent implements OnInit {

  @Input() messageSender: string;
  @Input() messageText: string;
  @Input() messageDate: string;

  constructor() { 
    this.messageSender="Dima";
    this.messageText="Test message";
    this.messageDate="28/03/2018";
  }

  ngOnInit() {
  }

}
