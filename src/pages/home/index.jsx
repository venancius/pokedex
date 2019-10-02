import React, { useState } from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import query from '../../constants/query'
import config from '../../constants/config'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import loadingImage from './../../images/icon.svg'
import {Helmet} from 'react-helmet';

const client = new ApolloClient({
    uri : config.endpoint,
    cache: new InMemoryCache(),
});

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

    if (!data && loading) return <div className="loadingFull loadingContainer"><img className="loadingIcon" src={loadingImage} alt="loading"/></div>;
    if (error) return `Error! ${error.message}`;

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
        >
        <div className="pokemonListContainer">
            {data.pokemons.map(pokemon => (
                <Link
                    to={pokemon.name.toLowerCase()}
                    className="pokemonContainer"
                >
                <img src={pokemon.image} alt={pokemon.name} className="pokemonImage"/>
                <div className="pokemonName">{pokemon.name}</div>
                </Link>

            ))}
        </div>
        {loading && (<div className="loadingContainer"><img className="loadingIcon" src={loadingImage} alt="loading"/></div>)}
    </InfiniteScroll>
       
    );
}


const Home = () => {
    const [showItem, setShowItem] = useState(9)
    const fetch = () =>{
        setShowItem(showItem+9)
    }

    return (
        <div>
             <Helmet>
                <title>Home | Pokédex</title>
            </Helmet>
            <ApolloProvider client={client}>
                <Pokemons showItem ={showItem} onFetchRequest={fetch} />
            </ApolloProvider>
        </div>
    );
}

export default Home