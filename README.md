# Suyay Events Frontend

Aplicación web para la gestión de eventos de Suyay Events, desarrollada con Angular.

## Características

- Login responsive con diseño moderno
- Autenticación de usuarios
- Validación de formularios
- Interfaz adaptativa
- Integración con API REST

## Tecnologías

- Angular 16
- Angular Material
- SCSS para estilos
- TypeScript
- RxJS

## Requisitos previos

- Node.js (v22.16.0 o superior)
- Angular CLI (v16.1.0)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/DylanQL/suyay-events-frontend.git
```

2. Instalar dependencias:
```bash
cd suyay-events-frontend
npm install
```

3. Iniciar servidor de desarrollo:
```bash
ng serve
```

4. Abrir el navegador en `http://localhost:4200`

## Estructura del proyecto

```
src/
├── app/
│   ├── auth/              # Módulo de autenticación
│   │   ├── components/    # Componentes de auth (login)
│   │   └── services/      # Servicios de auth
│   ├── dashboard/         # Módulo de dashboard
│   └── shared/           # Componentes y servicios compartidos
├── assets/
│   └── images/           # Imágenes y recursos
└── environments/         # Configuración de entornos
```

## Scripts disponibles

- `ng serve`: Inicia el servidor de desarrollo
- `ng build`: Compila el proyecto
- `ng test`: Ejecuta los tests unitarios
- `ng lint`: Ejecuta el linter

## Configuración

Para cambiar la URL de la API, modifica el archivo `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'TU_URL_API'
};
```

## Contribuir

1. Fork el proyecto
2. Crea tu rama de característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto

Dylan - [@DylanQL](https://github.com/DylanQL)
