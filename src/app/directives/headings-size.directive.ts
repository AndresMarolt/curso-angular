import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeadingsSize]'
})

export class HeadingsSizeDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-size',
      '20px'
    )
  }

}
