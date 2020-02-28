import { 
  Directive, 
  ElementRef, 
  Renderer2, 
  HostListener, 
  HostBinding, 
  Input 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  private elementRef: ElementRef;
  private renderer: Renderer2;

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    this.backgroundColor = this.defaultColor;
  }

}
