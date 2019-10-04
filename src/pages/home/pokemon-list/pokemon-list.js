import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import query from '../../../constants/query'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import Loading from '../../../components/loading'
import styles from './pokemon-list.module.css'

const PokemonList= props =>{
    const { loading, error, data } = useQuery(query.pokemonList,{
        variables : {
            first : props.showItem
        }
    });

    const loadFunc = ()=>
    {
        // handle data source limit
        if(!loading && props.showItem<=data.pokemons.length)
            props.onFetchRequest()
    }
    
    if (!data && loading) return <Loading isFull={true} />
    let pokemonList = data.pokemons
    if(props.filter!=='') {
        pokemonList = pokemonList.filter(pokemon=>(
            pokemon.types.join(",").toLowerCase().includes(props.filter.toLowerCase())
        ))
    }
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
        >
        <div className={styles.pokemonListContainer}>
            {pokemonList
                .map(pokemon => (
                <Link
                    key={pokemon.id}
                    to={pokemon.name.toLowerCase()}
                    className={styles.pokemonContainer}
                >
                    <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage}/>
                    <div className={styles.pokemonName}>{pokemon.name}</div>
                </Link>

            ))}
        </div>
        {loading && (<Loading isFull={false} />)}
        {error && (`Error! ${error.message}`)}
    </InfiniteScroll>
       
    );
}

export default PokemonList