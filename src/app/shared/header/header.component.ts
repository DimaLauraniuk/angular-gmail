import { Component, OnInit, Input, Inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';
import { TestServiceService } from '../../service/test-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ TestServiceService ]
})
export class HeaderComponent implements OnInit {

  number: number;

  constructor( @Inject(TestServiceService) public TestServiceService) {
    //this.number = TestServiceService.getNum();
  }

  ngOnInit() {
   console.log("number", this.TestServiceService.getNum());
  }

}
