class Pokemon {
  name: string = "";
  attack: number = 0;
  defense: number = 0;

  public setName(name: string): void {
    this.name = name;
  }

  public setAttack(attack: number): void {
    this.attack = attack;
  }

  public setDefense(defense: number): void {
    this.defense = defense;
  }
}

class PokemonBuilder {
  pokemon = new Pokemon();

  public setName(name: string): PokemonBuilder {
    this.pokemon.setName(name);
    return this;
  }

  public setAttack(attack: number): PokemonBuilder {
    this.pokemon.setAttack(attack);
    return this;
  }

  public setDefense(defense: number): PokemonBuilder {
    this.pokemon.setDefense(defense);
    return this;
  }

  public build(): Pokemon {
    return this.pokemon;
  }
}

const pokemonBuilder = new PokemonBuilder();

const charmander: Pokemon = pokemonBuilder
  .setName("Charmander")
  .setAttack(10)
  .setDefense(10)
  .build();

console.log(charmander);