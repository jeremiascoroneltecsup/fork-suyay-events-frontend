import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: any = null;
  currentSlide = 0;
  events = [
    {
      id: 1,
      title: 'Organizar Eventos Privados',
      subtitle: 'EVENTOS EXCLUSIVOS',
      location: 'Servicios Personalizados',
      date: '15',
      month: 'DIC',
      time: 'TODO EL AÑO',
      image: 'https://elolivar.es/olivar-content/uploads/2023/02/organizar-eventos-privados.png',
      category: 'Privado'
    },
    {
      id: 2,
      title: 'Fiestas Temáticas',
      subtitle: 'CELEBRACIONES ÚNICAS',
      location: 'Organización Completa',
      date: '20',
      month: 'DIC',
      time: 'BAJO RESERVA',
      image: 'https://eventos.urquiabas.com/wp-content/uploads/consejos-para-organizar-fiestas-tematicas-con-exito.jpg',
      category: 'Temático'
    },
    {
      id: 3,
      title: 'Fiestas de Octubre',
      subtitle: 'GUADALAJARA',
      location: 'Centro de la Ciudad',
      date: '25',
      month: 'OCT',
      time: 'FESTIVALES',
      image: 'https://media.viajando.travel/p/9081ba349f14a18de8b6230c8fb4e24e/adjuntos/236/imagenes/000/763/0000763382/1200x675/smart/fiestas-octubre-guadalajara-cartelerajpg.jpg',
      category: 'Festival'
    }
  ];

  allEvents = [
    {
      id: 4,
      title: 'Noche de Halloween Familiar',
      location: 'Lima, Club Social del Barrio',
      date: '31',
      month: 'OCT',
      time: '18:00–21:00',
      image: 'https://st2.depositphotos.com/3593445/50568/i/450/depositphotos_505689686-stock-photo-american-house-decorated-for-happy.jpg',
      category: 'Familiar'
    },
    {
      id: 5,
      title: 'Festa de Cosplay & Horror',
      location: 'Barranco, Sala El Refugio',
      date: '28',
      month: 'OCT',
      time: '20:00–00:00',
      image: 'https://st2.depositphotos.com/1594308/8293/i/950/depositphotos_82938490-stock-photo-disguised-people-celebrating-halloween.jpg',
      category: 'Cosplay'
    },
    {
      id: 6,
      title: 'Halloween Glow Party',
      location: 'Miraflores, Parque Municipal',
      date: '30',
      month: 'OCT',
      time: '19:00–23:00',
      image: 'https://m.media-amazon.com/images/I/71wOKWo9vTL.jpg',
      category: 'Party'
    },
    {
      id: 7,
      title: 'Terror en la Mansión',
      location: 'San Isidro, Hacienda La Molina',
      date: '29',
      month: 'OCT',
      time: '21:00–01:00',
      image: 'https://cdn0.uncomo.com/es/posts/8/8/7/como_hacer_una_fiesta_de_halloween_para_adultos_29788_orig.jpg',
      category: 'Terror'
    },
    {
      id: 12,
      title: 'Cosplay Street Fest',
      location: 'Centro de Lima',
      date: '5',
      month: 'NOV',
      time: '11:00–17:00',
      image: 'https://previews.123rf.com/images/stargazer84/stargazer842006/stargazer84200600096/148475125-osaka-japan-march-18-2018-nipponbashi-street-festa-colorful-cosplay-and-anime-festival-held.jpg',
      category: 'Cosplay'
    },
    {
      id: 13,
      title: 'Tarde de Películas de Horror',
      location: 'San Borja, Centro Cultural',
      date: '1',
      month: 'NOV',
      time: '16:00–20:00',
      image: 'https://static.skillshare.com/uploads/discussion/tmp/de233d75.jpg',
      category: 'Horror'
    },
    {
      id: 14,
      title: 'Murder Mystery Halloween',
      location: 'Surco, Mansión Colonial',
      date: '27',
      month: 'OCT',
      time: '19:00–23:00',
      image: 'https://previews.123rf.com/images/rh2010/rh20101910/rh2010191000741/133387374-group-of-elegant-people-well-dressed-in-retro-styles-drinking-wine-and-dancing-at-the-luxury-dance.jpg',
      category: 'Mystery'
    },
    {
      id: 15,
      title: 'Pumpkin Arts & Crafts',
      location: 'Magdalena, Parque Familiar',
      date: '24',
      month: 'OCT',
      time: '10:00–13:00',
      image: 'https://blog.dia.es/wp-content/uploads/2020/10/group-of-children-decorating-halloween-pumpkins-ETER7WT.jpg?x91179',
      category: 'Familiar'
    },
    {
      id: 16,
      title: 'Haunted Forest Walk',
      location: 'Lurín, Sendero Mágico',
      date: '31',
      month: 'OCT',
      time: '18:00–22:00',
      image: 'https://myhaliburtonhighlands.com/wp-content/uploads/2023/08/Haunted-Forest-Walk.jpg',
      category: 'Terror'
    },
    {
      id: 17,
      title: 'Glow Cosplay Night',
      location: 'Barranco, Galería Underground',
      date: '2',
      month: 'NOV',
      time: '20:00–02:00',
      image: 'https://static.workaway.info/gfx/foto/2/3/6/7/8/236784986523/xl/236784986523_170252868104785.jpg',
      category: 'Cosplay'
    },
    {
      id: 18,
      title: 'Kids Halloween Bash',
      location: 'San Isidro, Salón Comunitario',
      date: '30',
      month: 'OCT',
      time: '15:00–18:00',
      image: 'https://c02.purpledshub.com/uploads/sites/51/2023/09/halloween-party-ideas-for-kids-d05f1d9.jpg',
      category: 'Familiar'
    },
    {
      id: 19,
      title: 'Zombie Bar Crawl',
      location: 'Centro Histórico, Ruta de Bars',
      date: '31',
      month: 'OCT',
      time: '21:00–02:00',
      image: 'https://hips.hearstapps.com/hmg-prod/images/restaurante-tatel-halloween-elle-1635448067.jpg',
      category: 'Nocturno'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    // Obtener usuario actual de forma síncrona si ya está disponible
    this.currentUser = this.authService.getCurrentUserSync();
    
    // Suscribirse al Observable del usuario actual para actualizaciones
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    
    // Si hay token pero no hay usuario, obtener datos del servidor
    if (localStorage.getItem('token') && !this.currentUser) {
      this.authService.getCurrentUser().subscribe(user => {
        this.currentUser = user;
      });
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.events.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.events.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  searchEvents(query: string) {
    // Implementar búsqueda de eventos
    console.log('Buscando:', query);
  }

  selectCategory(category: string) {
    // Implementar filtro por categoría
    console.log('Categoría seleccionada:', category);
  }

  logout() {
    this.authService.logout();
    this.snackBar.open('Sesión cerrada correctamente', 'Cerrar', {
      duration: 3000,
      panelClass: ['custom-success-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    this.router.navigate(['/auth/login']);
  }
}
