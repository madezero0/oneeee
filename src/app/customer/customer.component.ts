import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
    '.heddercss{color:red}'
  ]
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
