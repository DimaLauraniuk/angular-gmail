import { Injectable } from '@angular/core';

@Injectable()
export class TestServiceService {

  private number: number=22;
  constructor() { }

  getNum(){
    return this.number;
  }
}
