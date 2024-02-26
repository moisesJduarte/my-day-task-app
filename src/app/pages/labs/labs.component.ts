import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todo-app';
  welcome = 'Hola';
  task = signal([
    'Instalar Angular cli',
    'aapreder angular al maximo',
    'volverme millonario',
    'ser el mejor programador'
  ]);
  name = signal('Moises');
  age = 24;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = {
    name: 'Moises',
    age: 24,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('hola')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;

    const newValue = input.value;
    this.name.set(newValue);
  }
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);



  }
}
