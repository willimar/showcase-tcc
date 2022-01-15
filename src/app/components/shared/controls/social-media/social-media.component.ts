import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  @Input() facebook: string = "";
  @Input() twitter: string = "";
  @Input() linkedin: string = "";
  @Input() instagram: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
