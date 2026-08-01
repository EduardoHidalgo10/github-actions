import { Component, inject } from '@angular/core';
import { ButtonComponent } from "./components/button-component/button-component";
import { SumService } from './services/sum';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sumService = inject(SumService);
}
