import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  @Input() sizeClass: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
