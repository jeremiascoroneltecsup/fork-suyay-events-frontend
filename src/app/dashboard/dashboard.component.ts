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
      title: 'Noche de Halloween Familiar',
      subtitle: 'LIMA',
      location: 'Club Social del Barrio',
      date: '31',
      month: 'OCT',
      time: '18:00–21:00',
      image: 'https://st2.depositphotos.com/3593445/50568/i/450/depositphotos_505689686-stock-photo-american-house-decorated-for-happy.jpg',
      category: 'Familiar'
    },
    {
      id: 2,
      title: 'Festa de Cosplay & Horror',
      subtitle: 'BARRANCO',
      location: 'Sala El Refugio',
      date: '28',
      month: 'OCT',
      time: '20:00–00:00',
      image: 'https://st2.depositphotos.com/1594308/8293/i/950/depositphotos_82938490-stock-photo-disguised-people-celebrating-halloween.jpg',
      category: 'Cosplay'
    },
    {
      id: 3,
      title: 'Halloween Glow Party',
      subtitle: 'MIRAFLORES',
      location: 'Parque Municipal',
      date: '30',
      month: 'OCT',
      time: '19:00–23:00',
      image: 'https://m.media-amazon.com/images/I/71wOKWo9vTL.jpg',
      category: 'Party'
    },
    {
      id: 4,
      title: 'Terror en la Mansión',
      subtitle: 'SAN ISIDRO',
      location: 'Hacienda La Molina',
      date: '29',
      month: 'OCT',
      time: '21:00–01:00',
      image: 'https://cdn0.uncomo.com/es/posts/8/8/7/como_hacer_una_fiesta_de_halloween_para_adultos_29788_orig.jpg',
      category: 'Terror'
    }
  ];

  allEvents = [
    {
      id: 5,
      title: 'AUDITORIO ANIME FRIENDS',
      location: 'UBICACIÓN DEL EVENTO',
      date: '15',
      month: 'NOV',
      time: 'FECHA Y HORA DEL EVENTO',
      image: 'https://via.placeholder.com/300x200/ff6b35/ffffff?text=Anime+Friends',
      category: 'Anime'
    },
    {
      id: 6,
      title: 'LATIN FESTIVAL',
      location: 'UBICACIÓN DEL EVENTO',
      date: '20',
      month: 'NOV',
      time: 'FECHA Y HORA DEL EVENTO',
      image: 'https://via.placeholder.com/300x200/e91e63/ffffff?text=Latin+Festival',
      category: 'Musical'
    },
    {
      id: 7,
      title: 'DÍA MUNDIAL DEL FOLKLORE',
      location: 'UBICACIÓN DEL EVENTO',
      date: '22',
      month: 'NOV',
      time: 'FECHA Y HORA DEL EVENTO',
      image: 'https://via.placeholder.com/300x200/2196f3/ffffff?text=Folklore',
      category: 'Cultural'
    },
    {
      id: 8,
      title: 'TÍTULO DEL EVENTO',
      location: 'UBICACIÓN DEL EVENTO',
      date: '25',
      month: 'NOV',
      time: 'FECHA Y HORA DEL EVENTO',
      image: 'https://via.placeholder.com/300x200/9c27b0/ffffff?text=Evento+Especial',
      category: 'Especial'
    },
    {
      id: 9,
      title: 'Cosplay Street Fest',
      location: 'Centro de Lima',
      date: '5',
      month: 'NOV',
      time: '11:00–17:00',
      image: 'https://previews.123rf.com/images/stargazer84/stargazer842006/stargazer84200600096/148475125-osaka-japan-march-18-2018-nipponbashi-street-festa-colorful-cosplay-and-anime-festival-held.jpg',
      category: 'Cosplay'
    },
    {
      id: 10,
      title: 'Tarde de Películas de Horror',
      location: 'San Borja, Centro Cultural',
      date: '1',
      month: 'NOV',
      time: '16:00–20:00',
      image: 'https://static.skillshare.com/uploads/discussion/tmp/de233d75.jpg',
      category: 'Horror'
    },
    {
      id: 11,
      title: 'Murder Mystery Halloween',
      location: 'Surco, Mansión Colonial',
      date: '27',
      month: 'OCT',
      time: '19:00–23:00',
      image: 'https://previews.123rf.com/images/rh2010/rh20101910/rh2010191000741/133387374-group-of-elegant-people-well-dressed-in-retro-styles-drinking-wine-and-dancing-at-the-luxury-dance.jpg',
      category: 'Mystery'
    },
    {
      id: 12,
      title: 'Pumpkin Arts & Crafts',
      location: 'Magdalena, Parque Familiar',
      date: '24',
      month: 'OCT',
      time: '10:00–13:00',
      image: 'https://blog.dia.es/wp-content/uploads/2020/10/group-of-children-decorating-halloween-pumpkins-ETER7WT.jpg?x91179',
      category: 'Familiar'
    },
    {
      id: 13,
      title: 'Haunted Forest Walk',
      location: 'Lurín, Sendero Mágico',
      date: '31',
      month: 'OCT',
      time: '18:00–22:00',
      image: 'https://myhaliburtonhighlands.com/wp-content/uploads/2023/08/Haunted-Forest-Walk.jpg',
      category: 'Terror'
    },
    {
      id: 14,
      title: 'Glow Cosplay Night',
      location: 'Barranco, Galería Underground',
      date: '2',
      month: 'NOV',
      time: '20:00–02:00',
      image: 'https://static.workaway.info/gfx/foto/2/3/6/7/8/236784986523/xl/236784986523_170252868104785.jpg',
      category: 'Cosplay'
    },
    {
      id: 15,
      title: 'Kids Halloween Bash',
      location: 'San Isidro, Salón Comunitario',
      date: '30',
      month: 'OCT',
      time: '15:00–18:00',
      image: 'https://c02.purpledshub.com/uploads/sites/51/2023/09/halloween-party-ideas-for-kids-d05f1d9.jpg',
      category: 'Familiar'
    },
    {
      id: 16,
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
    this.currentUser = this.authService.getCurrentUser();
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
