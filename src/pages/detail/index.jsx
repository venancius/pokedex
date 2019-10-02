import React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import query from '../../constants/query'
import config from '../../constants/config'
import { Link } from 'react-router-dom'
import loadingImage from './../../images/icon.svg'
import {Helmet} from "react-helmet";
import stringHelper from './../../helpers/stringHelper'

const client = new ApolloClient({
    uri : config.endpoint,
    cache: new InMemoryCache(),
});

const Pokemon = props =>{
    const { loading, error, data } = useQuery(query.pokemon,{
        variables : {
            name : props.name
        }
    });

    if (loading) return <div className="loadingFull loadingContainer"><img className="loadingIcon" src={loadingImage} alt="loading"/></div>;
    if (error) return `Error! ${error.message}`;

    return (
        <div className="pokemonListContainer">
            <div className="pokemonContainer">
                <h2>{data.pokemon.name}</h2>
                <img src={data.pokemon.image} alt={data.pokemon.name} className="pokemonImage"/>
                
                {data.pokemon.evolutions && (    
                <div>    
                    <hr/>
                    <div className="pokemonName">Evolutions</div>        
                    <div className="pokemonEvolution">
                        {data.pokemon.evolutions.map(pokemon=>(
                                <Link
                                to={pokemon.name.toLowerCase()}
                                className="pokemonContainer"
                            >
                            <img src={pokemon.image} alt={pokemon.name} className="pokemonImage"/>
                            <div className="pokemonName">{pokemon.name}</div>
                            </Link>
                        ))}                
                    </div>
                </div>
                )}

            </div>

            <div className="statContainer">
                <h2>Stats</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Number</td>
                            <td>{data.pokemon.number}</td>
                        </tr>
                        <tr>
                            <td>Types</td>
                            <td>{data.pokemon.types.join(",")}
                            </td>
                        </tr>
                        <tr>
                            <td>Species</td>
                            <td>{data.pokemon.classification}
                            </td>
                        </tr>
                        <tr>
                            <td>Fast Attacks</td>
                            <td>
                                <ul className="plainUl">
                                {data.pokemon.attacks.fast.map(element=>(
                                <li>{element.name} ( {element.type} ), {element.damage} damage</li>)
                                )}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Special Attacks</td>
                            <td>
                                <ul className="plainUl">
                                {data.pokemon.attacks.special.map(element=>(
                                <li>{element.name} ( {element.type} ), {element.damage} damage</li>)
                                )}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Resistances</td>
                            <td>
                                <ul className="plainUl">
                                {data.pokemon.resistant.map(element=>(
                                <li>{element}</li>)
                                )}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Weaknesses</td>
                            <td>
                                <ul className="plainUl">
                                {data.pokemon.weaknesses.map(element=>(
                                <li>{element}</li>)
                                )}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Weight Range</td>
                            <td>
                                {data.pokemon.weight.minimum} - {data.pokemon.weight.maximum} 
                            </td>
                        </tr>
                        <tr>
                            <td>Height Range</td>
                            <td>
                                {data.pokemon.height.minimum} - {data.pokemon.height.maximum} 
                            </td>
                        </tr>
                        <tr>
                            <td>Max HP</td>
                            <td> {data.pokemon.maxHP} </td>
                        </tr>
                        <tr>
                            <td>Max CP</td>
                            <td> {data.pokemon.maxCP} </td>
                        </tr>
                    </tbody>
                </table>
         
            </div>
        </div>
    );
}


const Detail = props => {
    return (
        <div>
            <Helmet>
                <title>{stringHelper.ucFirst(props.match.params.name)} | Pokédex</title>
            </Helmet>
            <ApolloProvider client={client}>
                <Pokemon name={props.match.params.name}/>
            </ApolloProvider>
        </div>
    );
}

export default Detail