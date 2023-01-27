import { HeadingsSizeDirective } from './headings-size.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement, Component, Renderer2} from '@angular/core'
import { By } from '@angular/platform-browser';

@Component({
  selector: 'my-test-component',
  template: '<h3 class="mytag" appHeadingsSize >test</h3>'
})
export class TestComponent {
  color:string = 'blue';
}


fdescribe('HeadingsSizeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        HeadingsSizeDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();   // trigger change detection so that UI renders and you can access element in next step.
    inputEl = fixture.debugElement.query(By.css('.mytag'));

  });


  it('should create an instance', () => {
    const directive = new HeadingsSizeDirective(inputEl, renderer);
    expect(directive).toBeTruthy();
  });
});

  // it('should create an instance', () => {
  //   const directive = new HeadingsSizeDirective();
  //   expect(directive).toBeTruthy();
  // });
