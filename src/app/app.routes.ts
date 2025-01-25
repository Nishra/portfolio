import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for the home page
  { path: 'about', component: HomeComponent }, // Use HomeComponent but navigate to the "About" section
  { path: 'skills', component: HomeComponent }, // Navigate to the "Skills" section
  { path: 'education', component: HomeComponent }, // Navigate to the "Education" section
  { path: 'projects', component: HomeComponent }, // Navigate to the "Projects" section
  { path: 'contact', component: HomeComponent }, // Navigate to the "Contact" section
];
