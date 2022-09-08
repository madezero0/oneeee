import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suplier',
  template: `
    <h2>
    inline template component
  </h2>
  `,
  styleUrls: ['./suplier.component.css']
})
export class SuplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
