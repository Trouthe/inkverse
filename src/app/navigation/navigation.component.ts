import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  open = false;
  moreDropdownOpen = false;

  toggleOpen() {
    this.open = !this.open;
  }

  toggleMoreDropdown() {
    this.moreDropdownOpen = !this.moreDropdownOpen;
  } 
}
