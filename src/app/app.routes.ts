import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login').then(m => m.Login),
  },
  {
    path:'login',
    loadComponent: () => import('./login/login').then(m => m.Login),
  },
  
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro').then(m => m.Registro),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito').then(m => m.Carrito),
  },
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: 'descubrir',
        loadComponent: () => import('./descubrir/descubrir').then(m => m.Descubrir),
      },
      {
        path: 'compra/:id',
        loadComponent: () => import('./compra/compra').then(m => m.Compra),
      },      
    ]
  }
];