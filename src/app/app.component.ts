import { Component, OnInit } from '@angular/core';
import { Loading } from '@core/loading/loading';
import { MenuItem } from '@core/modelo/menu-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: Observable<boolean>;
  title = 'app-base';

  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/producto', nombre: 'producto' }
  ];

  ngOnInit(): void {
    this.loading = Loading.state;
  }
}
