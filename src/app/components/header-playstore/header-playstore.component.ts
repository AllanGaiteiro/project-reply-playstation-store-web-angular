import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-playstore',
  templateUrl: './header-playstore.component.html',
  styleUrls: ['./header-playstore.component.css']
})
export class HeaderPlaystoreComponent {
  top = '0px';
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {

      this.top = '40px'
    } else {
      this.top = '0px';
    }
    this.prevScrollPos = currentScrollPos;
  }

}
