import { Component, Input, signal, computed, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from '../../../constants/icons.constant';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<div [innerHTML]="svgContent()" [class]="customClass"></div>`,
  styles: [`
    :host { display: inline-block; transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
    div { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
    ::ng-deep svg { width: inherit; height: inherit; }
  `]
})
export class IconComponent {
  private sanitizer = inject(DomSanitizer);

  @Input() set name(val: keyof typeof ICONS) { this._name.set(val); }
  @Input() customClass = '';
  
  private _name = signal<keyof typeof ICONS>('github');
  
  // This tells Angular the SVG string is safe to render
  svgContent = computed<SafeHtml>(() => {
    const rawSvg = ICONS[this._name()] || '';
    return this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  });
}