import { Component, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const homeContainer = document.querySelector('.home-container');
    if (homeContainer) {
      this.renderer.addClass(homeContainer, 'animate-body');
    }
  }
}