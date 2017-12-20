import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OauthcallbackComponent } from './oauthcallback/oauthcallback.component';

export const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'oauthcallback.html', component: OauthcallbackComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }
];
