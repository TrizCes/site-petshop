import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  userForm!: FormGroup;
  passwordPattern: string =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$";

  errors: string[] = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

  messages = {
    email: {
      valueMissing: 'O campo de email não pode estar vazio.',
      typeMismatch: 'O email digitado não é válido.',
    },
    password: {
      valueMissing: 'O campo de senha não pode estar vazio.',
      patternMismatch:
        'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.',
    },
    birthday: {
      valueMissing: 'O campo de data de nascimento não pode estar vazio.',
      customError: 'Você deve ser maior que 18 anos para se cadastrar.',
    },
    cpf: {
      valueMissing: 'O campo de CPF não pode estar vazio.',
      customError: 'O CPF digitado não é válido.'
  },
  cep: {
      valueMissing: 'O campo de CEP não pode estar vazio.',
      patternMismatch: 'O CEP digitado não é válido.',
      customError: 'Não foi possível buscar o CEP.'
  },
  place: {
      valueMissing: 'O campo de logradouro não pode estar vazio.'
  },
  city: {
      valueMissing: 'O campo de cidade não pode estar vazio.'
  },
  UF: {
      valueMissing: 'O campo de estado não pode estar vazio.'
  }
  };

  constructor(
    private _fb: FormBuilder,
    private _userServ: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.newUser();
  }

  newUser(): void {
    this.userForm = new FormGroup({
      id: new FormControl(this.newID()),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern(this.passwordPattern),
      ]),
      birthday: new FormControl('', [
        Validators.required, this.birthdayValidator]),
      cpf: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      UF: new FormControl('', [Validators.required]),
    });
  };

  birthdayValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {

    const birthday = new Date(control.value);
    const today = new Date();
    const ageMin = new Date(birthday.getFullYear() + 18, birthday.getUTCMonth(), birthday.getUTCDate());

    if (ageMin < today) {
       return null;
    }
    return { "underAge": true };
  };

  get nameControl() {
    return this.userForm.get('name');
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  get birthdayControl() {
    return this.userForm.get('birthday');
  }

  get cpfControl() {
    return this.userForm.get('cpf');
  }

  get cepControl() {
    return this.userForm.get('cep');
  }

  get placeControl() {
    return this.userForm.get('place');
  }

  get cityControl() {
    return this.userForm.get('city');
  }

  get ufControl() {
    return this.userForm.get('UF');
  }
  newID(): number {
    return Math.round(Math.random() * 10000);
  };

  signup(): void {
    this.newID();
    if (!this.userForm.valid) {
      window.alert('Dados invalidos, tente novamente');
      return;
    }

    const user: IUser[] = this.userForm.value;
    this._userServ.newUser(user);
    setTimeout(() => {
      this._router.navigate(['../login']);
    }, 400);
  };
}
