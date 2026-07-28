import { Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  template: `
    <footer class="tiny-footer">
      <div class="logo font-bold text-white">UMED</div>
      <p class="copyright">Copyright &copy; Umed Azhar {{ currentYear }}.</p>
      <p class="email-direct"><app-icon name="mail" class="icon-sm"></app-icon> umaidazher&#64;gmail.com</p>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}