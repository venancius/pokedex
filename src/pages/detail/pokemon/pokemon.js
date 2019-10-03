import React from "react"
import { useQuery } from "@apollo/react-hooks"
import query from './../../../constants/query'
import { Link } from 'react-router-dom'
import StatTable from './../stat-table'
import Loading from './../../../components/loading'
import styles from './pokemon.module.css'
import NotFound from './../../../components/errors/not-found'

const Pokemon = props =>{
    const { loading, error, data } = useQuery(query.pokemon,{
        variables : {
            name : props.name
        }
    })

    if (loading) return <Loading isFull={true} />
    if (error) return `Error! ${error.message}`
    if (!data.pokemon) return <NotFound pokemon={props.name}/>

    return (
        <div className={styles.pokemonListContainer}>
            <div className={styles.pokemonContainer}>
                <h2>{data.pokemon.name}</h2>
                <img src={data.pokemon.image} alt={data.pokemon.name} className={styles.pokemonImage}/>
                
                {data.pokemon.evolutions && (    
                <div>    
                    <hr/>
                    <div className={styles.pokemonName}>Evolutions</div>        
                    <div className={styles.pokemonEvolution}>
                        {data.pokemon.evolutions.map(pokemon=>(
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
                </div>
                )}

            </div>

            <div className={styles.statContainer}>
                <h2>Stats</h2>
                <StatTable data={data.pokemon} />
            </div>
        </div>
    )
}

export default Pokemon