import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <p>¡Bienvenido al Dashboard de Suyay Events!</p>
      <button (click)="logout()">Cerrar Sesión</button>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    button {
      padding: 0.5rem 1rem;
      background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.9;
    }
  `]
})
export class DashboardComponent {
  logout() {
    // Implementar lógica de logout aquí
    console.log('Logout clicked');
  }
}
