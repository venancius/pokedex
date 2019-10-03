import React from "react"
import ApolloClient, { InMemoryCache } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import config from '../../constants/config'
import { Helmet } from "react-helmet"
import stringHelper from '../../helpers/stringHelper'
import Pokemon from './pokemon'

const client = new ApolloClient({
    uri : config.endpoint,
    cache: new InMemoryCache(),
})

const Detail = props => {
    return (
        <div className="container">
            <Helmet>
                <title>{stringHelper.ucFirst(props.match.params.name)} | Pokédex</title>
            </Helmet>
            <ApolloProvider client={client}>
                <Pokemon name={props.match.params.name}/>
            </ApolloProvider>
        </div>
    )
}

export default Detail