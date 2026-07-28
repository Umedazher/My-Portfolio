// import { Component, signal, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
// import { trigger, style, transition, animate } from '@angular/animations';
// import { IconComponent } from '../../shared/components/icon/icon.component';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, IconComponent],
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css'],
//   animations: [
//     trigger('fadeInUp', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(30px)' }),
//         animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
//       ])
//     ])
//   ]
// })
// export class ContactComponent {
//   private fb = inject(FormBuilder);
//   showContactForm = signal<boolean>(false);
//   isSubmitting = signal<boolean>(false);
//   submitSuccess = signal<boolean>(false);

//   contactForm: FormGroup = this.fb.group({
//     name: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]]
//   });

//   toggleForm() {
//     this.showContactForm.update(v => !v);
//   }

//   onSubmit() {
//     if (this.contactForm.valid) {
//       this.isSubmitting.set(true);
//       setTimeout(() => {
//         this.isSubmitting.set(false);
//         this.submitSuccess.set(true);
//         this.contactForm.reset();
//         setTimeout(() => {
//           this.submitSuccess.set(false);
//           this.showContactForm.set(false);
//         }, 3000);
//       }, 1500);
//     } else {
//       Object.keys(this.contactForm.controls).forEach(key => {
//         this.contactForm.get(key)?.markAsTouched();
//       });
//     }
//   }
// }

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  showContactDetails = signal<boolean>(false);

  toggleContact() {
    this.showContactDetails.update(v => !v);
  }
}