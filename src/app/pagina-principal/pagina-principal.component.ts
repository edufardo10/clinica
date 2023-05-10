import { Component } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  Swiper,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent {
  /* config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: false },
    scrollbar: { draggable: true },
  };

  slides = [
    {
      link: '#',
      image: '../assets/img/img1.jpg',
    },
    { link: '#', image: '../assets/img/img2.jpg' },
    { link: '#', image: '../assets/img/img3.jpg' },
    { link: '#', image: '../assets/img/img4.jpg' },
    { link: '#', image: '../assets/img/img5.jpg' },
  ];

  constructor(private testService: TestService) {
/*
    (async () => {
      await this.testService.createTest('effefwfew');
    })(); */
  }
