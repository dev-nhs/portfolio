import { ViewChild, ElementRef , Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { ContactService } from 'src/app/service/contact.service';
import Swal from 'sweetalert2';


/**
 * Represents the HomeComponent class.
 * This component is responsible for handling the home page functionality.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Represents the reference to the closeModalButton element.
   */
  @ViewChild('closeModalButton') closeModalButton!: ElementRef;

  /**
   * Represents the userForm FormGroup.
   * It contains the form controls for name, email, subject, and message.
   */
  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private contactService: ContactService, private fb: FormBuilder) { }

  ngOnInit(): void { }

  /**
   * Opens the PDF file in a new tab.
   */
  dowloadPdf() {
    window.open('../assets/NEHEMIAS_HUAMAN_DEVELOPER_JUNIOR.pdf', '_blank');
  } 

  /**
   * Handles the form submission.
   * If the form is valid, it sends an email and performs necessary actions.
   * If the form is invalid, it displays an error message.
   */
  onSubmit() {
    if (this.userForm.valid) {
      this.contactService.sendEmail(this.userForm.value).subscribe((response) => {
        console.log('Form submitted!', response);
        this.closeModalButton.nativeElement.click();
        // Display success message
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Message sent successfully'
        })
        // Clear the form
        const inputForm = document.getElementById('userForm');
        this.clearForm(inputForm);
        this.userForm.reset();
      });
    } else {
      // Display error message
      const ToastError = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      ToastError.fire({
        icon: 'error',
        title: 'Error sending the message'
      })
      console.log('Formulario inválido. Revise los errores.');
    }
  }

  /**
   * Clears the form fields.
   * @param form - The form element.
   */
  clearForm(form: any) {
    for (const field of form.querySelectorAll('input, select, textarea')) {
      field.value = '';
    }
  }
}
