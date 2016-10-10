import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './partials/home/home.component';
import { AboutComponent } from './partials/about/about.component';

export const routes:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);