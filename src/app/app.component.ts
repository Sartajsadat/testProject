// app.component.ts
import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// library.add(faArrowRight);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarActive = false;
  

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
  
}
