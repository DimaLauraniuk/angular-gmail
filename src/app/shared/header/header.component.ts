import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
