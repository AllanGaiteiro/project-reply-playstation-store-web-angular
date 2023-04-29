import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-sony',
  templateUrl: './header-sony.component.html',
  styleUrls: ['./header-sony.component.css']
})
export class HeaderSonyComponent {
  isFixed = false;
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
    this.prevScrollPos = currentScrollPos;
  }

}
