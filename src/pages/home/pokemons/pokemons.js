import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import query from './../../../constants/query'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import Loading from './../../../components/loading'
import styles from './pokemons.module.css'

const Pokemons = props =>{
    const { loading, error, data } = useQuery(query.pokemons,{
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
    // if (error) return `Error! ${error.message}`;

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
        >
        <div className={styles.pokemonListContainer}>
            {data.pokemons.map(pokemon => (
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

export default Pokemons