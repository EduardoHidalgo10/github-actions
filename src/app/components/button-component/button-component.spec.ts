import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button-component';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
  });

  it('should increment the sum', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.sum();
    expect(component.sumService.sum()).toBe(1);
  });


  it('should reset the sum', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.reset();
    expect(component.sumService.sum()).toBe(0);
  });
});
