export interface PokemonResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonResults[];
}

export interface PokemonResults {
    name: string;
    url:  string;
}
