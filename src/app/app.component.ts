import { Component, OnInit } from '@angular/core';
import { Loading } from '@core/loading/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean;
  title = 'altas-cc';

  ngOnInit(): void {
    setTimeout(() => {Loading.state.subscribe(state => this.loading = state)}, 200);
  }
}
