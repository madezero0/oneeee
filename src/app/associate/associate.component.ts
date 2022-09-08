import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate',
  template: `
    <h2 class="cssheader">
     inline sytle with template
</h2>
  `,
  styles: [
    '.cssheader{color:yellow}'
  ]
})
export class AssociateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
