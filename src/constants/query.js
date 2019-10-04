import gql from "graphql-tag";

const GET_POKEMON_LIST = gql `
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id,
            name,
            image,
            types
        }
    }
`;

const GET_POKEMON = gql `
query pokemon($name: String!){
    pokemon(name: $name){
      id,
      number,
    	name,
    	weight {
    	  minimum
    	  maximum
    	},
    	height {
    	  minimum
    	  maximum
    	},
    	classification,
    types,
    resistant,
    attacks{
      fast{
        name,
        type,
        damage
      },
      special{
        name,
        type,
        damage
      }
    },
    weaknesses,
    fleeRate,
    maxCP,
    evolutions {
      id,
      name,
      image
    },
    evolutionRequirements {
      amount
      name
    },
    maxHP,
    image
    }
}
`;

export default {
    pokemonList : GET_POKEMON_LIST,
    pokemon     : GET_POKEMON
}