import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFilmHighlited]'
})
export class FilmHighlitedDirective implements OnInit{

  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.border = '2px solid black';
  }

}
