import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items = ['Home', 'About', 'Contact', 'Settings'];
  filteredItems = [...this.items];
  sidebarActive = false;
  searchActive = false;
  headerSearchQuery = '';
  settingsSubmenuVisible = false;
  hoveredItem: string | null = null;
  submenuItems = ['Profile', 'Account', 'Preferences'];

  getRouterLink(item: string): string {
    return `/${item.toLowerCase()}`;
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }

  search() {
    this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.headerSearchQuery.toLowerCase()));
  }

  showSettingsSubmenu(item: string) {
    if (item === 'Settings') {
      this.settingsSubmenuVisible = true;
      this.hoveredItem = item;
    }
  }

  hideSettingsSubmenu() {
    this.settingsSubmenuVisible = false;
    this.hoveredItem = null;
  }
}