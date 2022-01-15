import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-footer',
  templateUrl: './system-footer.component.html',
  styleUrls: []
})
export class SystemFooterComponent implements OnInit {

  @Input() version: string = '0.0.0-bet01';
  @Input() copyRight: string = 'Willimar Rocha';
  @Input() title: string = 'Showcase';

  constructor() { }

  ngOnInit(): void {
  }

}
