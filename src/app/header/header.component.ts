import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  btnClick(e:any){
    let mode = e.target.dataset.mode
    this.setTheme(mode)
  }
    
  setTheme(mode: string) {

    const linkElement = document.getElementById('theme-setting') as HTMLLinkElement;
    
    if(mode == 'light'){
      linkElement.setAttribute('href', '');
    }

    if(mode == 'blue'){
    linkElement.setAttribute('href', 'assets/images/blue.css');
    }

    if(mode == 'black'){
      linkElement.setAttribute('href', 'assets/images/black.css');
    }

    if(mode == 'beige'){
      linkElement.setAttribute('href', 'assets/images/beige.css');
    }
  
  }
     
}
