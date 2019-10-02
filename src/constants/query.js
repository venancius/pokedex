import gql from "graphql-tag";

const GET_POKEMONS = gql `
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            name,
            classification,
            image
        }
    }
`;

const GET_POKEMON = gql `
query pokemon($name: String!){
    pokemon(name: $name){
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
    pokemons : GET_POKEMONS,
    pokemon  : GET_POKEMON
}