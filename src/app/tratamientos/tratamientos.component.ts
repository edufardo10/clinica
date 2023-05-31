import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.css']
})
export class TratamientosComponent {
  tratamientos: any[] = [
    {
      nombre: 'Limpieza dental',
      descripcion: 'Eliminación de placa y sarro para mantener una buena Es un procedimiento de rutina en el que se elimina la placa y el sarro de los dientes y las encías. También se pulen los dientes para eliminar manchas superficiales, dejando una sensación de limpieza y frescura en la boca. bucal.',
      imagen: "./assets/img/tratamiento1.jpg"
    },
    {
      nombre: 'Obturaciones dentales',
      descripcion: 'También conocidas como empastes, se utilizan para tratar las caries. Durante este procedimiento, el dentista elimina el tejido dental dañado y rellena el área afectada con un material de obturación, como resina compuesta o amalgama, restaurando la forma y la función del diente.',
      imagen: "./assets/img/tratamiento2.jpg"
    },
    {
      nombre: 'Tratamiento de conducto radicular ',
      descripcion: 'Se lleva a cabo cuando un diente está gravemente dañado o infectado y no se puede salvar. El dentista retira el diente de la cavidad bucal de manera segura y luego proporciona instrucciones para el cuidado posterior.',
      imagen: "./assets/img/tratamiento3.jpg"
    },
    {
      nombre: 'Implantes dentales:',
      descripcion: 'Son una opción de tratamiento para reemplazar dientes perdidos. Durante este procedimiento, se inserta un implante de titanio en el hueso de la mandíbula o el maxilar, y luego se coloca una corona dental sobre el implante, restaurando la apariencia y la función del diente perdido',
      imagen: "./assets/img/tratamiento4.jpg"
    },
    {
      nombre: 'Ortodoncia ',
      descripcion: 'Se utiliza para corregir la alineación y la posición de los dientes y las mandíbulas. Los brackets y los alineadores transparentes son algunos de los métodos comunes utilizados en la ortodoncia para mover gradualmente los dientes y lograr una sonrisa más recta y funcional',
      imagen: "./assets/img/tratamiento5.jpg"
    },
    {
      nombre: 'Blanqueamiento dental',
      descripcion: 'Este tratamiento se realiza para aclarar el color de los dientes y eliminar las manchas superficiales. Puede llevarse a cabo en el consultorio dental o en casa utilizando kits de blanqueamiento dental recomendados por el dentista.',
      imagen: "./assets/img/tratamiento6.jpg"
    },

    {
      nombre: 'Prótesis dentales',
      descripcion: 'Las prótesis dentales, como las dentaduras parciales o completas, se utilizan para reemplazar los dientes faltantes. Estas prótesis están diseñadas a medida para encajar en la boca del paciente y restaurar la función masticatoria y la apariencia estética. para aclarar el color de los dientes y eliminar manchas.',
      imagen: "./assets/img/tratamiento7.jpg"
    },

    {
      nombre: 'Extracción dental',
      descripcion: 'Se lleva a cabo cuando un diente está gravemente dañado o infectado y no se puede salvar. El dentista retira el diente de la cavidad bucal de manera segura y luego proporciona instrucciones para el cuidado posterior',
      imagen: "./assets/img/tratamiento8.jpg"
    },

    {
      nombre: 'Tratamiento de enfermedades periodontales:',
      descripcion: 'Las enfermedades periodontales, como la gingivitis y la periodontitis, afectan las encías y las estructuras de soporte de los dientes.',
      imagen: "./assets/img/tratamiento9.jpg"
    },





  ];
}
