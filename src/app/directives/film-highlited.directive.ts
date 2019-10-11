import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFilmHighlited]'
})
export class FilmHighlitedDirective implements OnInit {

  constructor(private elementRef : ElementRef,
              private renderer : Renderer2) { }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid black');
  }

  /*@HostListener('hover') onHover() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
  }*/

  ngOnInit() {
  }

}
