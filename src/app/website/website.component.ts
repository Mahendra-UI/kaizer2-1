import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event: any){
    window.scroll(0,0);
  }
}
