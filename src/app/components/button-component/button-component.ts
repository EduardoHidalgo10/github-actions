import { Component, inject } from '@angular/core';
import { SumService } from '../../services/sum';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  sumService = inject(SumService);



  sum() {
    this.sumService.sum.update(prev => prev + 1);
  }


  reset() {
    this.sumService.sum.set(0);
  }
}
