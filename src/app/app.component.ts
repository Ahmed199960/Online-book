import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-book';

  rondomFeature ='books';
  onNavigate(feature: string){
    this.rondomFeature = feature;
  }
}
