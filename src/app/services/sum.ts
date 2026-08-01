import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SumService {
   public sum = signal(0);
}