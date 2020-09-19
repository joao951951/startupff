import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'escolha',
    loadChildren: () => import('./escolha/escolha.module').then( m => m.EscolhaPageModule)
  },
  {
    path: 'itens',
    loadChildren: () => import('./itens/itens.module').then( m => m.ItensPageModule)
  },
  {
    path: 'fim',
    loadChildren: () => import('./fim/fim.module').then( m => m.FimPageModule)
  },
  {
    path: 'confirmacao',
    loadChildren: () => import('./confirmacao/confirmacao.module').then( m => m.ConfirmacaoPageModule)
  },
  {
    path: 'controle',
    loadChildren: () => import('./controle/controle.module').then( m => m.ControlePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
