import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons({ first: 0 });
  }

  loadPokemons(event: any): void {
    const offset = event.first || 0;
    this.pokemonService.getPokemons(20, offset).subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  // getPokemonImageUrl(pokemon: any): string {
  //   const id = pokemon.url.split('/')[6];
  //   return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  // }
}
