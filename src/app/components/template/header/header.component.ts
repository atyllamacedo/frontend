
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  ngOnInit(): void {
  }

  get title(): string {
    return 'Aplicação Crud'
  }

  get icon(): string {
    return 'Angular'
  }

  get routeUrl(): string {
    return 'Teste'
  }
}
