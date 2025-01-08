import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.component.service';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule],
})
export class ServicesComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.emailService.sendEmail(this.form.value).then(
        (response) => {
          alert('¡Correo enviado con éxito!');
          this.form.reset();
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          alert('Hubo un error al enviar el correo.');
        }
      );
    } else {
      alert('Por favor, llena todos los campos correctamente.');
    }
  }
}
