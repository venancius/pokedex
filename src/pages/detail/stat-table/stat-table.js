import React from "react"

const StatTable = (props) => {
    
    let pokemon = props.data

    return (
        <table className="statTable">
            <tbody>
                <tr>
                    <td>Number</td>
                    <td>{pokemon.number}</td>
                </tr>
                <tr>
                    <td>Types</td>
                    <td>{pokemon.types.join(",")}
                    </td>
                </tr>
                <tr>
                    <td>Species</td>
                    <td>{pokemon.classification}
                    </td>
                </tr>
                <tr>
                    <td>Fast Attacks</td>
                    <td>
                        {pokemon.attacks.fast.map((element, index)=>(
                        <span key={index}> - {element.name} ( {element.type} ), {element.damage} damage<br></br></span>)
                        )}
                    </td>
                </tr>
                <tr>
                    <td>Special Attacks</td>
                    <td>
                        {pokemon.attacks.special.map((element, index)=>(
                        <span key={index}> - {element.name} ( {element.type} ), {element.damage} damage <br></br></span>)
                        )}
                    </td>
                </tr>
                <tr>
                    <td>Resistances</td>
                    <td>
                        {pokemon.resistant.map((element, index)=>(
                        <span key={index}> - {element} <br></br></span>)
                        )}
                    </td>
                </tr>
                <tr>
                    <td>Weaknesses</td>
                    <td>
                        {pokemon.weaknesses.map((element, index)=>(
                        <span key={index}> - {element}<br></br></span>)
                        )}
                    </td>
                </tr>
                <tr>
                    <td>Weight Range</td>
                    <td>
                        {pokemon.weight.minimum} - {pokemon.weight.maximum} 
                    </td>
                </tr>
                <tr>
                    <td>Height Range</td>
                    <td>
                        {pokemon.height.minimum} - {pokemon.height.maximum} 
                    </td>
                </tr>
                <tr>
                    <td>Max HP</td>
                    <td> {pokemon.maxHP} </td>
                </tr>
                <tr>
                    <td>Max CP</td>
                    <td> {pokemon.maxCP} </td>
                </tr>
            </tbody>
        </table>
    )

}

export default StatTable