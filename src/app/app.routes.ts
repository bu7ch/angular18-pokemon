import { Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';



export const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: '', component: PokedexComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent}
];
