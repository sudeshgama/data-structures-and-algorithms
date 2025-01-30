import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidParenthesesComponent } from './valid-parentheses.component';

describe('ValidParenthesesComponent', () => {
  let component: ValidParenthesesComponent;
  let fixture: ComponentFixture<ValidParenthesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidParenthesesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ValidParenthesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
