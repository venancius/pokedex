import React, { useState } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'
import Pokemons from './pokemons'
import config from './../../constants/config'

const client = new ApolloClient({
    uri : config.endpoint
});

const Home = () => {
    const [showItem, setShowItem] = useState(9)
    const fetch = () =>{
        setShowItem(showItem+9)
    }

    return (
        <div className="container">
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