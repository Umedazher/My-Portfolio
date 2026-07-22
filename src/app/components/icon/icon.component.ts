import { Component, Input, signal, computed } from '@angular/core';
import { ICONS } from '../../constants/icons.constant';
@Component({
  selector: 'app-icon', standalone: true,
  template: `<div [innerHTML]="svgContent()" [class]="customClass"></div>`,
  styles: [`:host { display: inline-block; } div { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; } ::ng-deep svg { width: inherit; height: inherit; }`]
})
export class IconComponent {
  @Input() set name(val: keyof typeof ICONS) { this._name.set(val); }
  @Input() customClass = '';
  private _name = signal<keyof typeof ICONS>('github');
  svgContent = computed(() => ICONS[this._name()] || '');
}