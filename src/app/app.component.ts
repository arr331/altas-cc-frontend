import { Component, OnInit } from '@angular/core';
import { Loading } from '@core/loading/loading';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: Observable<boolean>;
  title = 'app-base';

  ngOnInit(): void {
    this.loading = Loading.state;
  }
}
