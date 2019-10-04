import React, { useState } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'
import PokemonList from './pokemon-list'
import config from './../../constants/config'

const client = new ApolloClient({
    uri : config.endpoint
});

const Home = () => {
    const [showItem, setShowItem] = useState(15)
    const fetch = () =>{
        setShowItem(showItem+15)
    }

    let search = window.location.search
    let params = new URLSearchParams(search)
    let filter = params.get('filter') ? params.get('filter') : ''

    return (
        <div className="container">
             <Helmet>
                <title>Home | Pokédex</title>
            </Helmet>
            <ApolloProvider client={client}>
                <PokemonList filter={filter} showItem ={showItem} onFetchRequest={fetch} />
            </ApolloProvider>
        </div>
    );
}

export default Home