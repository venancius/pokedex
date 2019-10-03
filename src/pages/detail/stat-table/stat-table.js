import React from "react"

const StatTable = (props) => {
    
    let pokemon = props.data

    return (
        <table>
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
                        <ul className="plainUl">
                        {pokemon.attacks.fast.map((element, index)=>(
                        <li key={index}>{element.name} ( {element.type} ), {element.damage} damage</li>)
                        )}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Special Attacks</td>
                    <td>
                        <ul className="plainUl">
                        {pokemon.attacks.special.map((element, index)=>(
                        <li key={index}>{element.name} ( {element.type} ), {element.damage} damage</li>)
                        )}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Resistances</td>
                    <td>
                        <ul className="plainUl">
                        {pokemon.resistant.map((element, index)=>(
                        <li key={index}>{element}</li>)
                        )}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Weaknesses</td>
                    <td>
                        <ul className="plainUl">
                        {pokemon.weaknesses.map((element, index)=>(
                        <li key={index}>{element}</li>)
                        )}
                        </ul>
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